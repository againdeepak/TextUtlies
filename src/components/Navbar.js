import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg primary color. navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check text-${props.mode==='light'?'dark':'light'} form-switch`}>
                     Choose Themes
                     <button  type="button" className="btn btn-danger mx-1"onClick={props.RedFun}>R</button>
                    <button  type="button" className="btn btn-success mx-1"onClick={props.GreenFun}>G</button>
                    <button  type="button" className="btn btn-primary mx-1" onClick={props.BlueFun}>P</button>
                    <button  type="button" className="btn btn-warning mx-1"onClick={props.toggleMode}>Y</button>
                    {/* <input className="form-check-input "  type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
                    {/* <label className="form-check-label" htmlor="flexSwitchCheckDefault">Default switch checkbox input</label> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
};

// Navbar.propTypes={title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string };


Navbar.defaultProps = {
    title: 'set title here',
    about: 'about'
};

// whatever you will pass it will tell the type