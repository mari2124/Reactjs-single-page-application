import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './mariappan.jpg';

const Home = () => {
    return (
        
        <div className="main-p">
            <h1>Mariappan UI UX Developer</h1>
            <img src={Logo} alt="logo" className="logo" ></img>
        </div>
        
    )
}

export default Home;