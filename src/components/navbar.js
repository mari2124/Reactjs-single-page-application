import React from 'react';
import { BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import Route from 'react-router-dom';

const Navbar = () => {
    
        return (
            <Router>            
                <nav className="menu">
                <ul>
                    <navitem item="Home"> <NavLink to="/">Home</NavLink></navitem>
                    <navitem item="About"><NavLink to="/about">About</NavLink></navitem>
                    <navitem item="Education"><Link to="/education">Education</Link></navitem>
                    <navitem item="Skills"><Link to="/skills">Skills</Link></navitem>
                    <navitem item="Contact" ><Link to="/contact">contact</Link></navitem>
                </ul>
            </nav>
            </Router>
        )
    
}

export default Navbar;