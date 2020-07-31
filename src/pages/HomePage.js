import React from 'react'

function HomePage() {
    return (
        <div className="content">
            <h1>Welcome to <span className="project-name">context-reducer</span> project!</h1>
            <h3>
                This project is done in <span className="white">react-js</span>
            </h3>
            <p>
                Here <span className="white">react-router-dom</span> is used and protected routes are implemented
                with authentication done in global state.
            </p>
            <p>
                To consume auth state from global state, <span className="white">useContext</span> hook is used and to change auth state from a component, dispatch method from <span className="white">useReducer</span> hook is called.
            </p>
            <p>
                Repo on <a href="https://github.com/azashi/context-reducer" target="_blank" rel="noopener noreferrer"><span className="blue">GitHub</span></a>
            </p>
        </div>
    )
}

export default HomePage
