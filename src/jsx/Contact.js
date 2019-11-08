import React from 'react';
import {
    NavLink,
    BrowserRouter as Router
  } from 'react-router-dom';
  

class Contact extends React.Component {
    render() {
      return (
        <div className="container-fluid no-padding-left">
              <NavLink exact activeClassName="active" className=" ml-5 nav-style" to="/">Home</NavLink>
              <NavLink activeClassName="active" className="ml-5 nav-style" to="/about"  >About</NavLink>
              <NavLink activeClassName="active" className="ml-5 nav-style" to="/contact">Contact</NavLink>
              <form>
                <input placeholder="name" type="name" />
                <input placeholder="email" type="email" />
                <button onClick={this.onSubmit}>Submit</button>
             </form>
        </div>
      )
    }
  }

export default Contact;
