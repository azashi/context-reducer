import React from 'react'

function Help() {
    return (
        <div className="content">
            <h3>Help</h3>
            <ol style={style}>
                <li> Username or password is incorrect</li>
                <li> Please Sign Up first</li>
                <li> Username and password are persisted in local-storage after sign up</li>
                <li> If you forget your login details, just sign up again</li>
            </ol>
            <br />
            <p>
                For code implementation details visit this project's repo on <a href="https://github.com/azashi/context-reducer" target="_blank" rel="noopener noreferrer"><span className="blue">GitHub</span></a>
            </p>
        </div>
    )
}

export default Help

const style = {
    marginLeft: "20px"
}