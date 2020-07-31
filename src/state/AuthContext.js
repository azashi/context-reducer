import React, { useReducer } from 'react'
import ls, { hash } from './localStorage'

export const Auth = React.createContext()

const initialState = {
    isLoggedIn: false,
    username: '',
    password: ''
}

function reducer(state, action) {

    const { username, password } = action.payload

    switch (action.type) {

        case 'login':
            const lsUser = ls.get()
            if (lsUser?.username === username && lsUser?.password === hash(password)) {
                return { ...state, isLoggedIn: true, username, password }
            } else {
                return { ...state, isLoggedIn: false }
            }

        case 'logout':
            return { ...state, ...initialState }

        case 'signup':
            ls.set(action.payload)
            return { ...state, username, password }

        default:
            return state
    }
}


export default function AuthContext({ children }) {

    const [newSate, dispatch] = useReducer(reducer, initialState)

    return (
        <Auth.Provider value={{ ...newSate, dispatch }}>
            {children}
        </Auth.Provider>
    )
}
