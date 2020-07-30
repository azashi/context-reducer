import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <Fragment>
            <h2>
                Error 404 not found
            </h2>
            <br />
            Return to <Link to="/">Home Page</Link>
        </Fragment>
    )
}

export default ErrorPage
