import React from "react";

export class User extends React.Component{
    render(){
        return( 
            <div className='row inner-container'> 
             <div className="col-6">
                 {console.log(this.props)}
                <img src={this.props.user.imgurl} className='resize img-fluid img-thumbnail'></img>
             </div>
             <div id='details' className='col-6'>
                <span>{this.props.user.name}</span>
                <p>{this.props.user.quote}</p>
            </div>
            
            
            </div>
        );
    }
}