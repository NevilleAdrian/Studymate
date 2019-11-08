import React from "react";
import Col from "react-bootstrap/Col";
import { User } from './User';
import { Search } from './Search';
import { VideoDropDown } from './VideoDropDown';

export class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id){
        this.props.onClick(id);
    }
    render(){
        return(
            <Col md={12}>
                <Col md={12}>
                    <User user={this.props.user} />
                </Col>
                <Col md={12}>
                    <Search history={this.props.history} onClick={this.handleClick} />
                </Col>
                <Col md={12}>
                    <VideoDropDown history={this.props.history} onClick={this.handleClick} />
                </Col>
            </Col>
            
        
        );
    }
}