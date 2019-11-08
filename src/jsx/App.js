import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Route, Switch} from 'react-router-dom';

import { ContentWrapper } from './ContentWrapper';
import { TopNav } from './TopNav';
import { Login } from './Login';
import Contact from './Contact';
import About from './About';

const authChecker = {
  login: true,
  logout: false
}

const getUser = () =>{
  if(localStorage.getItem("user") != null){
    return JSON.parse(localStorage.getItem("user"));
  }
  return null;
}
export class App extends React.Component {
     constructor(props) {
      super(props);
      this.state = {user: getUser() };
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogin(userDetails){
      localStorage.setItem("user", JSON.stringify(userDetails));
      this.setState({user: getUser()})
    }
    handleLogout(){
      localStorage.setItem("user", null);
      this.setState({user: getUser()})
    }
    render() {
      return (
        this.state.user !== null 
        ?
        <>
          <Row className="no-margin">
            <Col md={12} className="no-padding">
              <TopNav onClick={this.handleLogout} history={this.props.history}/>
            </Col>
          </Row>
          <Row className="no-margin">
            <Switch>
              <Route path="/home" render={(props) => <ContentWrapper {...props} user={this.state.user} />} />
              <Route path="/video/:id" render={(props) => <ContentWrapper {...props} user={this.state.user} />} />
              <Route render={(props) => <ContentWrapper {...props} user={this.state.user} />} />
            </Switch>
          </Row>
          
        </>
        :
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} onClick={this.handleLogin} />} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route render={(props) => <Login {...props} onClick={this.handleLogin} history={this.props.history}/>} />
        </Switch>
      );
    }
  }
   
  
