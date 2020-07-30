import React, { useContext } from 'react'
import { Auth } from '../state/AuthContext'
import { useHistory } from 'react-router-dom'

function LoginPage() {

    const auth = useContext(Auth)
    const history = useHistory()

    return (
        <div>
            THis is LoginPage
            <br />
            <button onClick={() => {
                auth.dispatch({ type: "login" })
                history.replace("/dashboard")
            }} >Login</button>
        </div>
    )
}

export default LoginPage
