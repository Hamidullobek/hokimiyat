import React from 'react';
import "./aboutHokim.scss";
import Qorinboy from "../images/aboutHokim2.jpg";
// import { useState } from 'react';    

function About() {
    // const [show, setShow] = useState(false)
    function upp() {
        window.scrollTo(0,0)
    }
    return (

        <div className="full-about-hokim" id='about'>
            <div className="about">
                <div className="container">


                    <div className="left-page">
                        <h1>Tuman hokimi</h1>
                        <h1>haqida</h1>
                    </div>
                    <div className="vall">

                    </div>
                    <div className="right-page">
                        {/* <p>Elyor Nabijonov 1979-yil Qo‘rg‘ontepa tumanida tug‘ilgan bo‘lib, 2000-</p>
                    <p>yilda Andijon muhandislik-iqtisodiyot institutini, 2014- yilda esa</p>
                    <p>Toshkent davlat iqtisodiyot universitetini tamomlagan.</p> */}
                        <p>Elyor Nabijonov 1979-yil Qo‘rg‘ontepa tumanida tug‘ilgan bo‘lib, 2000-yilda Andijon muhandislik-iqtisodiyot institutini, 2014- yilda esa Toshkent davlat iqtisodiyot universitetini tamomlagan.</p>
                        <button>+998 90 123 45 67</button>

                    </div>
                </div>
            </div>
            <div className="work-activity">
                <div className="container">
                    <div className="photo-of-governor">
                        <img src={Qorinboy} alt="" className='pg'/>
                    </div>
                    <div className="about-work-activity">
                        <div className="title">
                            <h1>Ish faoliyati</h1>
                        </div>
                        <div className="about">
                            <p>Ish faoliyatini 2001-yil Tashqi iqtisodiy faoliyat Milliy banki Qo‘rg‘ontepa filiali mijozlarga xizmat ko‘rsatish sektori mutaxassisligidan boshlagan. Turli yillarda Qo‘rg‘ontepa tumani hokimligi moliya bo‘limi budjet iqtisodchisi, “O‘zsanoatqurilishbank” aksiyadorlik tijorat banki Shahrixon filiali ichki hisob-kitob sektori arxivariusi, buxgalteriya hisobi bo‘limi hisobchisi, iqtisodiy tahlil bo‘limi boshlig‘i o‘rinbosari, bankning Toshkent shahar mintaqaviy filiali kotibiyati mudiri, “OrientFinansbank” xususiy aksiyadorlik tijorat banki ijroya apparati ijro nazorati bo‘limi boshlig‘i o‘rinbosari—boshqaruv raisi o‘rinbosari yordamchisi, ijro intizomini nazorat qilish va bank xizmatchilari bo‘yicha dastlabki maslahat berish boshqarmasi boshlig‘i o‘rinbosari lavozimlarida ishlagan.</p>
                            <button onClick={()=> upp()} className="button">
                                <i class="fa-solid fa-arrow-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;
