import React from "react";

export class Home extends React.Component{
    render(){
        return(
            <div style={this.props.style} id="jumbotron" className="col-xl-9 col-lg-8 col-md-7">
                <div className="header">
                    <h1>Your dependable<br/> learning buddy</h1>
                    <p>Lored tempor incididunt ut labore et dolore<br/> is nostrud maquis nostrud labore e </p>
                </div>
                <div className="header-img">
                    <img src="/images/homeImg.svg" alt="header-img" className="img-fluid"/>
                </div>
            </div>
        );
    }
}