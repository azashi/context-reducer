import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../state/AuthContext'
import { useHistory } from 'react-router-dom'
import { AUTH_ACTIONS } from '../state/ACTION_TYPES'

function Header() {

    const { LOGOUT } = AUTH_ACTIONS

    const auth = useContext(Auth)
    const history = useHistory()

    let links = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign-Up</Link></li>
            <li><Link to="/login">Login</Link></li>
        </>
    )

    if (auth.isLoggedIn) {
        links = (
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/userdetails">User Details</Link></li>
                <li>
                    <Link to=""
                        className="logout"
                        onClick={() => {
                            auth.dispatch({ type: LOGOUT, payload: '' })
                            history.push("/login")
                        }}>Log Out</Link>
                </li>
            </>
        )
    }

    return (
        <div className="header">
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        </div>
    )
}

export default React.memo(Header)
