//this component show navigation bar with two webpage Home and Features.

import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";//here we use Link instead of ancore tage or href,Link load components without load whole page.

export default function Navbar(props) {
  return (
    // ` ` whatever is in between this quotes it will consider as javascript string, $ represent JS variable.
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{/**link to render homepage */}
          {props.title}
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{/**link to render homepage */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Features">{/**link to render Feature page */}
                Features
              </Link>
            </li>
          </ul>
          {/*'props.mode===light'?'dark':'light' it is condition it will select dark if props.mode is light */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            {/* onClick toggleMode function execute which is in App.js file */}
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// propTypes set exact types of props,Navbar title only accept string as prop.
Navbar.propTypes = {
    title:PropTypes.string.isRequired
}

// if there is nothing pass in prop then defaultProps will be display.
Navbar.defaultProps = {
    title:'Set Title here'
}