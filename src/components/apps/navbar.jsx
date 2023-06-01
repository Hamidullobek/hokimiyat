import React from 'react';
import { useState } from 'react';
import Logo from "../images/logo.png";
import "../styles/navbar.scss";

function Navbar() {
    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);
    function setNavbar() {
        if (window.scrollY >= 50) {
            setState(true)
        } else {
            setState(false);
        }
    }
    window.addEventListener("scroll", setNavbar)
    return (
        <nav className={state ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className={!show ? "links" : "links active"}>
                    <a href="#">Bosh sahifa</a>
                    <a href="#">Tuman</a>
                    <a href="">E-Hukumat</a>
                    <a href="#">Jamoa</a>
                    <a href="#">Yangiliklar</a>
                    <a href="#">Murojatlar</a>
                </div>
                <div className="phone-number">
                    <button>+998 90 123 45 67</button>
                </div>
            </div>
            <div className="showButton">
                <button className='helper' onClick={() => setShow(!show)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;