import React, { useContext } from 'react'
import { Auth } from '../state/AuthContext'
import { useHistory } from 'react-router-dom'

function LoginPage() {

    const auth = useContext(Auth)
    const history = useHistory()

    return (
        <div>
            THis is LoginPage
            <button onClick={() => {
                auth.dispatch({ type: "login" })
                history.push("/dashboard")
            }} >Login</button>
        </div>
    )
}

export default LoginPage
