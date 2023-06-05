import React from 'react';
import "./about.scss";
function About() {
    return ( 
        <div className="full-about-place">
            <div className="about">
                <div className="container">
                    <div className="left-page">
                        <h1>Tuman hokimi haqida</h1>
                    </div>
                    <div className="border"></div>
                    <div className="right-page">
                        <p>Elyor Nabijonov 1979-yil Qo‘rg‘ontepa tumanida tug‘ilgan bo‘lib, 2000-yilda Andijon muhandislik-iqtisodiyot institutini, 2014- yilda esa Toshkent davlat iqtisodiyot universitetini tamomlagan.</p>
                        <button>+998 90 123 45 67</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;