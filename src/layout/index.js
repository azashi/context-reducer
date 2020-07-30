import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Layout
