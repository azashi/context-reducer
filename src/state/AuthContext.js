import React, { useReducer } from 'react'


export const Auth = React.createContext()

const status = {
    isLoggedIn: false
}

function reducer(state, action) {
    switch (action.type) {

        case 'login':
            return { isLoggedIn: true }

        case 'logout':
            return { isLoggedIn: false }

        default:
            return state
    }
}


export default function AuthContext({ children }) {

    const [newSate, dispatch] = useReducer(reducer, status)

    return (
        <Auth.Provider value={{ ...newSate, dispatch }}>
            {children}
        </Auth.Provider>
    )
}
