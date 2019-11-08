import React from 'react';
import Col from 'react-bootstrap/Col';
import { SideMenu } from './SideMenu';
import { MainContent } from './MainContent';
import {videos} from '../data/data';


export class ContentWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {video: null};
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
      if(this.props.match.params.id !== null){
        this.handleClick(this.props.match.params.id)
      }
    }
    getVideoObject(id){
      const vid = videos.filter(cat => cat.Videos.filter(y => y.VideoId == id).length > 0)
                          .reduce((x,y,_,ar) =>{
                              if(y.Videos.filter(z => z.VideoId == id).length === 1)
                              {
                                  let arr = ar[0].Videos;
                                  let c = y.Videos.filter(z => z.VideoId == id)
                                  let index = arr.indexOf(c[0]);
                                  x["main"] = c[0];
                                  x["videos"] = [];
                                  if(index == arr.length - 1){
                                      x.videos.push(arr[0]);
                                      x.videos.push(arr[1]);
                                  }
                                  else if(index == arr.length - 2){
                                      x.videos.push(arr[arr.length - 1]);
                                      x.videos.push(arr[0]);
                                  }
                                  else{
                                      x.videos.push(arr[index + 1]);
                                      x.videos.push(arr[index + 2]);
                                  }
                                  
                              }
                              return x;
                          } ,{})
      return vid;
  }
  
  handleClick(id){
      const v = this.getVideoObject(id);
      this.setState({video: v});
  }
    render() { 
      return (
        <>
          <Col md={3} className="no-padding">
            {console.log(this.props)}
            <SideMenu user={this.props.user} history={this.props.history} onClick={this.handleClick}/>
          </Col>
          <Col md={9} className="no-padding">
            <MainContent video={this.state.video} match={this.props.match} history={this.props.history} onClick={this.handleClick}/>
          </Col>
        </>
            
      );
    }
  }
   
  
