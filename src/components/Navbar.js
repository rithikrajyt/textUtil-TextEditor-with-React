import React from "react";
//import styled from 'styled-components';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
const propTypes = {};

const defaultProps = {};

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                onClick={props.toggleMode}
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                Enable Dark Mode
              </label>
            </div>
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

//Navbar.propTypes = {title: propTypes.string};
//Navbar.defaultProps = {
// title: 'Set title here'
//};
// #endregion

export default Navbar;
