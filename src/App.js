import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, NavLink } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import './App.css';



class App extends Component{
  render () {
    return (
      <Router>
       
      <div className="App">
      
      <nav className="menu">
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </ul>
      </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
      </Router>
    );
  }

}

  export default App;
