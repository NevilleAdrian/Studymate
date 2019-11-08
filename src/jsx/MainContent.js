import React from "react";
import { Home } from './Home';
import { Video } from './Video';
import {style} from './TopNav';



export class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(id){
        this.props.onClick(id);
    }
    
    render(){
        console.log(this.props)
        return(
            
            this.props.video === null || !this.props.match.path.includes("video")? 
                <Home style={style.white}/>
                :
                <Video style={style.white} video={this.props.video} history={this.props.history} onClick={this.handleClick}/>
                
        );
    }
}