import React from 'react';
// import { Switch } from 'react-router-dom';
import Header from './components/apps/header.jsx';
import About from './components/apps/about.jsx';
import Life from './components/apps/hokimlife.jsx';
import Remember from './components/apps/remember.jsx';
import { Switch } from 'react-router-dom';
function Main() {
    return (
        <>
            <Header />
                <About />
                <Life />
                <Remember />
        </>
    );
}

export default Main;