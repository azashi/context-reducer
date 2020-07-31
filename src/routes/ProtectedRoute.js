import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from '../state/AuthContext'

function ProtectedRoute({ component: Component, ...rest }) {

    const auth = useContext(Auth)

    return (
        <Route {...rest} render={(props) => {
            if (auth.isLoggedIn) {
                return <Component {...props} />
            } else {
                return <Redirect to={
                    {
                        pathname: "/help",
                        state: { from: props.location }
                    }
                } />
            }
        }
        } />
    )
}

export default ProtectedRoute
