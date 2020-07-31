const ls = {
    set({ username, password }) {
        const user = { username, password: hash(password) }
        localStorage.setItem("crUser", JSON.stringify(user))
    },
    get() {
        const user = localStorage.getItem("crUser")
        return JSON.parse(user)
    },
    rm() {
        const user = this.get()
        localStorage.removeItem("crUser")
        return user
    }
}

export const hash = (pass) => {
    const salt = 'youSmarty'
    const rev = pass.split('').reverse().join('')
    const coded = salt + rev
    return coded
}

export default ls