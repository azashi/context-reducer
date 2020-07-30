import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            THis is HomePage
            <Link to="login"> Login </Link>
            <Link to="signup"> Sign Up </Link>
        </div>
    )
}

export default HomePage
