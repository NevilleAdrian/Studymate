import React from 'react';
import {
    NavLink,
    BrowserRouter as Router
  } from 'react-router-dom';
  

class About extends React.Component {
    render() {
      return (
        <div className="container-fluid no-padding-left">
              <NavLink exact activeClassName="active" className=" ml-5 nav-style" to="/">Home</NavLink>
              <NavLink activeClassName="active" className="ml-5 nav-style" to="/about"  >About</NavLink>
              <NavLink activeClassName="active" className="ml-5 nav-style" to="/contact">Contact</NavLink>
          <p>About us</p>
        </div>
      )
    }
  }

export default About;