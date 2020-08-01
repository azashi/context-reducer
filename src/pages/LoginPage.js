import React, { useContext, useState } from 'react'
import { Auth } from '../state/AuthContext'
import { useHistory } from 'react-router-dom'
import SignInForm from '../components/SignInForm'
import { AUTH_ACTIONS } from '../state/ACTION_TYPES'
import { PATHS } from '../routes/PATHS'

function LoginPage() {

    const { DASHBOARD_PATH } = PATHS.protectedPaths

    const { LOGIN } = AUTH_ACTIONS

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
        auth.dispatch({ type: LOGIN, payload: details })
        history.replace(DASHBOARD_PATH)
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
