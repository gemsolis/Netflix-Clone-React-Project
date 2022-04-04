import React from 'react'
import logo from '../assets/netflix-clone-logo.png';
import { IoLogoReact,IoLogoFirebase } from 'react-icons/io5'
import { AiFillApi,AiFillDatabase } from 'react-icons/ai'

import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="Netflix Clone" className="footer-logo"/>
        <h3 className="made-label">Made with 🌻 by Gem Solis</h3>
        <p>Powered with:</p>
        <ul className="tools-badge">
        <li className="tool-item"><IoLogoReact/> React</li>
        <li className="tool-item"><AiFillApi/> Axios</li>
        <li className="tool-item"><AiFillDatabase/> The Movie DB</li>
        <li className="tool-item"><IoLogoFirebase/>Firebase</li>
        </ul>
    </footer>
  )
}

export default Footer