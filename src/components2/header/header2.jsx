import React from 'react';
import { useState } from 'react';
import "./header2.scss";
import Tl from './tl';
import Sd from './sd';
import Td from './td';
import Logo from "../images/logo.png"
function Header2() {
    const [path, setPath] = useState('tl')
    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);
    function setNavbar() {
        if (window.scrollY >= 50) {
            setState(true)
        } else {
            setState(false);
        }
    }
    window.addEventListener('scroll', setNavbar)
    return (
        <>
            <div className="header-place">

                {/* navbar */}
                <nav className={state ? "navbar active" : "navbar"}>
                    <div className="container">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className={!show ? "links" : "links active"}>
                            <a href="#">Bosh sahifa</a>
                            <a href="#">Tuman</a>
                            <a href="#">E-Hukumat</a>
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
                {/* <div className="header"></div> */}
                {/* <div className="header">
                    <div className="pages">
                        {
                                path === 'tl'
                                ?
                                <Tl />
                                :
                                path === "sd"
                                ?
                                <Sd />
                                :
                                <Td />

                        }
                    </div>
                    <div className="pather-button">
                        <button onClick={() => setPath("tl")}>Talim</button>
                        <button onClick={() =>setPath("sd")}>sa2</button>
                        <button onClick={() => setPath("td")}>td</button>
                    </div>
                </div> */}
                <div className="header">
                    <div className="pages">
                        <div className="container">

                            {
                                path === 'tl'
                                    ?
                                    <Tl />
                                    :
                                    path === 'sd'
                                        ?
                                        <Sd />
                                        :
                                        <Td />
                            }
                            <div className="pathers">
                                <button onClick={() => setPath('tl')}></button>
                                <button onClick={() => setPath('sd')}></button>
                                <button onClick={() => setPath('td')}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header2;