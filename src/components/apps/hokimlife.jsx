import React from 'react';
import "../styles/hokimlife.scss";
function Life() {
    return (
        <div className="hokim-life" id="hukumat">
            <div className="container">
                <div className="title">
                    <h1>Hokimiyat hayoti</h1>
                    <p>Ma'sulyatli hodimlarimiz ertayu-kech xalq uchun hizmatda!</p>
                </div>
                {/* kategoriyalar */}
                <div className="categories">
                    {/* biznes */}
                    <div className="category">
                        <div className="icon">
                            <i class="fa-light fa-business-time"></i>
                        </div>
                        <div className="about">
                            <h1>Biznes</h1>
                            <p>Tadbirkorlarni qo'llab-quvatlash hokim zimmasida!</p>
                        </div>
                    </div>
                    {/* arizalar */}
                    <div className="category">
                        <div className="icon">
                            <i class="fa-duotone fa-user-secret"></i>
                        </div>
                        <div className="about">
                            <h1>Arizalar</h1>
                            <p>Xarbir arizalar ko'rib chiqiladi va muammolar bartaraf</p>
                            <p>etiladi!</p>
                        </div>
                    </div>
                    {/* yangi inshoatalar */}
                    <div className="category">
                        <div className="icon">
                            <i class="fa-solid fa-location-plus"></i>
                        </div>
                        <div className="about">
                            <h1>Yangi inshoatlar</h1>
                            <p>Tadbirkorlarni qo'llab-quvatlash hokim zimmasida!</p>
                        </div>
                    </div>
                    {/* talim😂 */}
                    <div className="category">
                        <div className="icon">
                            <i class="fa-sharp fa-regular fa-graduation-cap"></i>
                        </div>
                        <div className="about">
                            <h1>Ta'lim</h1>
                            <p>Ta'lim sifatini oshirish yangi kelajakni qurish bilan</p>
                            <p>barobar!</p>
                        </div>
                    </div>
                    {/* Oila👨‍👩‍👧‍👦 */}
                    <div className="category">
                        <div className="icon">
                            <i class="fa-light fa-family-dress"></i>
                        </div>
                        <div className="about">
                            <h1>Oila</h1>
                            <p>Oilalarning tinch-totuvligi va mustahkamligini taminlsh</p>
                            <p>uchun mahalla faollari doim xizmatda.</p>
                        </div>
                    </div>
                    {/* jinoyatchilik😎 */}
                    <div className="category">
                        <div className="icon">
                            
                        </div>
                        <div className="about">
                            <h1>Jinoyatchilik</h1>
                            <p>Jinoyatchiliklarni bartaraf etish uchun IIB hodimlari</p>
                            <p>qasamyodlariga muvofiq tarzda ertayu-kech ter</p>
                            <p>to'kishmoqda.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Life;