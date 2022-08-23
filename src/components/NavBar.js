import React from 'react'
// import { Link } from "react-router-dom";
import logo from "./../img/TurnersLogo.png";
import "./NavBar.css";

const NavBar = () => {

    return (
      <>
        <div className="main-nav-bar">
            <img src={logo} alt="turners logo" className="navbar-logo"></img>
   <nav>
            <ul className='menu-list'
            >
              <li className="menu-links">
                  Home
              </li>
              <button className="login-button">Login</button>
            </ul>
  
          </nav>
        </div>
      </>
    );
  };

export default NavBar
