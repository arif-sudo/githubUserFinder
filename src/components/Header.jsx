import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a style={{ 'fontFamily': 'Merriweather' }} className="navbar-brand ms-3 fs-2" href="https:/github.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-github me-2" />Github finder</a>
                </div>
            </nav>

        )
    }
}

export default Header