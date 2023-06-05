import React from 'react';
import "./tl.scss";
import { Fade } from 'react-reveal';

function Tl() {
    return (
        <div className="talim">
            <div className="container">
                <div className="title">
                    <Fade bottom>
                        <h1>Tuman ta'lim uyushmasi</h1>
                    </Fade>

                </div>

                <div className="about">
                    <Fade bottom>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quidem adipisci id necessitatibus accusamus repellendus architecto voluptatibus, eius doloribus eveniet ex, facilis ullam nesciunt consequatur?</p>
                    </Fade>

                </div>
                <div className="phone-number">
                    <Fade bottom>
                        <button>+998 90 123 45 67</button>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Tl;