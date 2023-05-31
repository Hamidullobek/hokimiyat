import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import "../styles/header.scss";

function Header() {
    const [state, setState] = useState(false);
    const [show, setShow] =useState(false)
    function setNavbar(){
        if(window.scrollY>=50){
            setState(true)
        }
        else{
            setState(false)
        }
    }
    window.addEventListener('scroll', setNavbar)
    return (
        <div className="header-area" id='header-area'>
            <nav className={state ? "navbar navbar2" : "navbar"}>
                <div className="container">
                    <div className="logo">
                        <img src="https://kurgantepa.netlify.app/assets/images/logo.png" alt="" />
                    </div>
                    <div className={!show ? "links": "active"}>
                        <a href="#">Bosh sahifa</a>
                        <a href="#about">Tuman hokimi</a>
                        <a href="#hukumat">E-Hukumat</a>
                        <a href="#">Jamoa</a>
                        <a href="#">Yangiliklar</a>
                        <a href="#">Murojatlar</a>
                    </div>
                    <div className="phone_number">
                        <button className='num'>+998 90 123 45 67</button>
                    </div>
                    
                </div>
                <button className='menu'onClick={()=> setShow(!show)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
            </nav>
            <div className="main-page">
                <div className="container">
                    <div className="all">
                        <Fade bottom>
                            <div className="title">
                                <h1>Tuman ta'lim uyushmasi</h1>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="about">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni Magni balo battar</p>
                                <p> sit vero iure illum accusamus consectetur commodi nisi numquam facilis? binnasalar</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="phone-number">
                                <button>+998 97 123 45 67</button>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Header;