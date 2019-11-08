import React from "react";
import userservice from './userservice';

import {
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom';



// import '../../public/css/login.css';
var logo = '/images/logo.svg';
// import img from "../img/Sketch 2.svg";
var img = "/images/Sketch 2.svg";


export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', users: null};
        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
        this.credentials = [];
    }

    componentDidMount(){
      userservice
        .allUsers()
        .then(users => {
          this.setState({...this.state, users: users})
          console.log(this.state)
        })
        .catch(err => console.log(err))
      console.log(this.state)

    }

    handleInputEmail(e){
        this.setState({...this.state, email: e.target.value})
        
    }
    handleInputPassword(e){
      this.setState({...this.state, password: e.target.value})
    }

    handleFormSubmit = (e) => {
       let userIndex = null;
      e.preventDefault();
      this.credentials.push(this.state.email, this.state.password);
     
      
      for (let i = 0; i < this.state.users.length; i++) {
        const element = this.state.users[i];

        if((element.email === this.credentials[0]) && (element.password === this.credentials[1])){
          userIndex = i;
        }
        
      }
      console.log(userIndex);
      if(userIndex === null){
        const warn = document.getElementById("_warning");
        if(warn.classList.contains("d-none")){
          warn.classList.remove("d-none");
          warn.classList.add("d-block");
          this.credentials=[];
        }
      }
      else{
        this.props.history.push("/home")
        this.props.onClick(this.state.users[userIndex])
      }
     
    }
    

    render(){
      return(
     <div className="container-fluid no-padding-left">
      <div className="row">
        <div className="col-xl-7 col-lg-7 d-none d-md-none d-lg-block">
          <div className="col-xl-12 pl-5" data-aos="fade-down" data-aos-duration="2000">
              <h1>Your dependable <br></br> learning buddy</h1>    
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-12">
        <nav class="row">
            <div class="col-12 d-flex move nav-links">
              <NavLink activeClassName="active" className="ml-5 nav-style" to="/about"  >About</NavLink>
              <NavLink activeClassName="active" className="ml-5 nav-style" to="/contact">Contact</NavLink>

            </div>
          </nav>
          <div  className="brand">
            <img src={logo} alt="logo" className="img-fluid"></img>
          </div>
          <form action="#" onSubmit={this.handleFormSubmit}>
              <h5><b>LOGIN</b></h5>
              <input type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleInputEmail}></input>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputPassword}></input>
              <div  className="r_and_p">
                   <span className="col-xl-6 align-middle"> <a href="#">Forgot Password?</a></span>
              </div>
              <input type="submit" className="font-weight-bold dodger-blue" name="submit" value="LOGIN"></input>
              <span id="_warning" className="d-none text-danger">username or password not correct</span>
          </form>
          <div className="form-photo col-xl-12 pl-5">
            <img src={img} alt="" className="img-fluid"/>
          </div>

          <div className="footer">
              <p> &copy; 2019 StudyMate All Rights Reserved</p>
          </div>
          </div>
      </div>
      </div>
      );
  }
}

export default Login
