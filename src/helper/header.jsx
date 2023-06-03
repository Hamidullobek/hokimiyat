import React from 'react';
import { useState } from 'react';

import "../../styles/header.scss";
import Tl from '../components2/tl';
import Sd from '../components2/sd';
import Td from '../components2/td';
function Header() {
    const [state, setState] = useState('tl')
    return ( 
        <>
            <div className="header">
                <div className="pages">
                {
                    state==='tl'
                    ? 
                    <Tl/>
                    :
                    state==="sd"
                    ?
                    <Sd/>
                    : 
                    <Td/>

                }
                </div>
                <div className="pather-button">
                    <button onClick={()=>setState("tl")}></button>
                    <button  onClick={()=>setState("sd")}></button>
                    <button onClick={()=>setState("td")}></button>                    
                </div>
            </div>
        </>
    );
}

export default Header;