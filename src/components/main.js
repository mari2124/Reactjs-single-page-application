import React from 'react';
import Social from './social';
import Home from '../contents/home';
import About from '../contents/about';
import Education from '../contents/education';
import Skills from '../contents/skills';
import Contact from '../contents/contact';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";


const Main = () => {
    return (
        <Router>
        <div className="main">
            <Home />
            <About />
            <Education />
            <Skills />
            <Contact />
            <Social />
        </div>
        </Router>
    )
}

export default Main;