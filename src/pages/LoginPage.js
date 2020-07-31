import React, { useContext, useState } from 'react'
import { Auth } from '../state/AuthContext'
import { useHistory } from 'react-router-dom'
import SignInForm from '../components/SignInForm'

function LoginPage() {

    const auth = useContext(Auth)

    const { username, password } = auth

    const history = useHistory()

    const [details, setDetails] = useState({ username, password })

    const handleDetails = (event) => {
        const { name, value } = event.target
        setDetails(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        auth.dispatch({ type: "login", payload: details })
        history.replace("/dashboard")
    }

    return (
        <>
            <h2>Log In</h2>
            <SignInForm
                handleSubmit={handleSubmit}
                handleDetails={handleDetails}
                details={details}
                submitButton="Login" />
        </>
    )
}

export default LoginPage
