import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div class="row">
                        Choose color for background
                        <div className="col md-3 mx-2 bg-dark rounded-circle text-white" onClick={props.toggleModee}>Black</div>
                        <div className="col md-3 mx-2 bg-secondary rounded-circle text-white" onClick={props.toggleModee2}>Gray</div>
                        <div className="col md-3 mx-2 bg rounded-circle" onClick={props.toggleModee3}>Green</div>
                        <div className="col md-3 mx-2 bg-info rounded-circle" onClick={props.toggleModee4}>Cyan</div>
                    </div>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>

    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Set title Here',
    aboutText: 'About here'

}