import React, { useContext } from 'react'
import { Auth } from '../../state/AuthContext'
import { useHistory, Link } from 'react-router-dom'

function DashBoardPage() {

    const auth = useContext(Auth)
    const history = useHistory()

    return (
        <div>
            this is DashBoardPage
            <button onClick={() => {
                auth.dispatch({ type: "logout" })
                history.push("/login")
            }}>Log Out</button>
            <Link to="/userdetails">User Details</Link>
        </div>
    )
}

export default DashBoardPage
