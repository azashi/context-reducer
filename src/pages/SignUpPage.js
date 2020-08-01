import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SignInForm from '../components/SignInForm'
import { Auth } from '../state/AuthContext'
import { AUTH_ACTIONS } from '../state/ACTION_TYPES'
import { PATHS } from '../routes/PATHS'

function SignUpPage() {

    const { LOGIN_PATH } = PATHS.publicPaths

    const { SIGNUP } = AUTH_ACTIONS

    const auth = useContext(Auth)

    const history = useHistory()

    const [details, setDetails] = useState({ username: "", password: "" })

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
        auth.dispatch({ type: SIGNUP, payload: details })
        history.push(LOGIN_PATH)
    }

    return (
        <>
            <h2>Sign Up</h2>
            <SignInForm
                handleSubmit={handleSubmit}
                handleDetails={handleDetails}
                details={details}
                submitButton="Sign Up" />
        </>
    )
}

export default SignUpPage
