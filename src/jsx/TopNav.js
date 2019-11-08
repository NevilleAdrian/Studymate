import React from "react";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

var logo = '/images/logo.svg';

export const style = {
    white: {
        backgroundColor: "white"
    }
}
export class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.history.push("/");
        this.props.onClick();
    }
    render(){
        return(
            <nav className="row pl-4 no-margin" style={style.white}>
                    <div className="col-4 d-flex justify-content-start brand-logo no-padding">
                        <Link to="/home"><img src="/images/logoStudy.svg" alt="Brand-Logo"/></Link>
                    </div>
                    <div className="col-8 d-flex justify-content-end nav-links no-padding">
                        <a href="" onClick={this.handleClick} className="ml-5">LOG OUT</a>
                    </div>
                </nav>
            
        );
    }
}