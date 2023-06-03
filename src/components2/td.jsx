import React from 'react';
import {Fade} from "react-reveal";
function Td() {
    return (
        <div className="sud">
            <div className="container">
                <div className="title">
                    <Fade bottom>
                        <h1>Tuman sudi</h1>
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

export default Td;