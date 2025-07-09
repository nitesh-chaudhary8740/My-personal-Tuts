import React from 'react'
import  '../CssAssests/NavbarCSS.css'
import { Link } from 'react-router-dom'

// import logoImg from '../../public/logo192.png';

export default function Navbar() {
    return (

        <div className="navContainer">
            <div className="logo">
                {/* <img src={logoImg} alt="51" /> */}
                <img className='logoImg' src={`${process.env.PUBLIC_URL}/logo192.png`} alt="logo" />
            </div>
            <div className="optionsContainer">
           
                <Link className="options" to="/">Home</Link>
                <Link className="options" to="/Projects">My Projects</Link>
                <Link className="options" to="/Blog">Blog</Link>
                <Link className="options" to="Contact">Contact Me</Link>
            </div>

        </div>

    )
}
