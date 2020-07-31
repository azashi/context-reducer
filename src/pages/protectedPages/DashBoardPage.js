import React, { useContext } from 'react'
import { Auth } from '../../state/AuthContext'

function DashBoardPage() {

    const { username } = useContext(Auth)

    return (
        <div className="content">
            <h1>Welcome <span className="white">{username}</span> ,</h1>
            <h3>Checkout user-details page for more information...</h3>
        </div>
    )
}

export default DashBoardPage
