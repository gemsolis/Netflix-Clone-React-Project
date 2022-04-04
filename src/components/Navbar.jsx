import React, {useEffect, useState} from 'react';

import './Navbar.css'
import logo from '../assets/netflix-clone-logo.png'
import user from '../assets/user-icon.png'

const Navbar = () => {

const [show, handleShow] = useState(false);

 useEffect(() => {
     
         window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
         });
         return () => {
             window.removeEventListener("scroll")
         };
     }, []);


  return (
    <div className={`navbar-container ${show && "nav-black"}`}>
        <div className="nav-logo-wrap">
        <img src={logo} className="nav-logo" alt="Netflix Logo"/>
        </div>

        <div className="nav-links-wrap">
            <ul className="nav-links">
                <li className="nav-link">Home</li>
                <li className="nav-link">TV Shows</li>
                <li className="nav-link">Movies</li>
                <li className="nav-link">New & Popular</li>
                <li className="nav-link">My List</li>

            </ul>
        </div>


        <div className="nav-user-wrap">
        <img src={user} className="nav-user" alt="Netflix Logo"/>
        </div>

    </div>
  )
}

export default Navbar 