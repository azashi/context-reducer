import React, { useContext } from 'react'
import { Auth } from "../../state/AuthContext";

function UserDetailsPage() {

    const { username, password } = useContext(Auth)

    return (
        <div className="content">
            <h1>User Details:</h1>
            <h2>Username : <span className="white">{username}</span></h2>
            <h2>Password : <span className="olive">{password}</span></h2>
        </div>
    )
}

export default UserDetailsPage
