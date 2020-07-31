import React from 'react'

function SignInForm({ handleSubmit, handleDetails, details, submitButton }) {

    return (
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
            <div className="input-group">
                <label htmlFor="username">Enter username</label>
                <input type="text"
                    name="username"
                    onChange={handleDetails}
                    value={details["username"]}
                    required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Enter password</label>
                <input type="password"
                    name="password"
                    onChange={handleDetails}
                    value={details["password"]}
                    required />
            </div>
            <div className="btn-group">
                <button type="submit" >{submitButton}</button>
            </div>
        </form>
    )
}

export default SignInForm
