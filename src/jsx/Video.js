import React from "react";


export class Video extends React.Component{
    handleClick(id){
        this.props.history.push("/video/"+id);
        this.props.onClick(id);
    }
    render(){
        console.log(this.props.video);
        return(
            <div style={this.props.style} id="video-box" className="col-xl-12 col-lg-12 col-md-12">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 video-heading">
                            <h4 className="no-margin">{this.props.video.main.VideoUrl}</h4>
                        </div>
                        <div className="col-12">
                            <video src={"/"+this.props.video.main.VideoName} className="no-margin" controls></video>
                        </div>
                    </div>
                    <div className="row mt-4 no-padding">
                        <div className="col-12 col-xl-6 col-md-12">
                            <h5>Lored tempor incididunt ut la</h5>
                            <p>Lored tempor incididunt ut labore et dolore is nostrudLored tempor incididunt ut labore et dolore is nostrud</p>
                        </div>
                        <div className="col-12 col-xl-3 col-md-6">
                            <video src={"/"+this.props.video.videos[0].VideoName}  className="no-margin" controls></video>
                            <button className="btn btn-default text-small" onClick={() => this.handleClick(this.props.video.videos[0].VideoId)}>{this.props.video.videos[0].VideoUrl}</button>
                        </div>
                        <div className="col-12 col-xl-3 col-md-6">
                            <video src={"/"+this.props.video.videos[1].VideoName}  className="no-margin"controls></video>
                            <button className="btn btn-default text-small" onClick={() => this.handleClick(this.props.video.videos[1].VideoId)}>{this.props.video.videos[1].VideoUrl}</button>
                            <h5></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}