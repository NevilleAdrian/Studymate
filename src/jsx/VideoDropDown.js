import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import videos from '../data/data';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import Item from 'react-bootstrap/DropdownItem';


const Subjects = (props) => {
    
  const handleClick = (id) => {
    props.onClick(id)
    console.log(props)
    props.history.push(`/video/${id}`)
    console.log(props);
   }
   
    const Subjects = (division) => videos.filter((subject) => {
       return subject.Class === division
    }).map((subject) => {
        let topics =  subject.Videos.map((topic) => {
            return (
                <Dropdown.Item key={topic.VideoName} onClick={() => handleClick(topic.VideoId)}>
                  {topic.VideoUrl}
                </Dropdown.Item>
            ) 
        })
        return (
            <Dropdown>
                <Dropdown.Toggle key={subject.CategoryName} variant="default" id="dropdown-basic">
                    {subject.CategoryName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {topics}
                </Dropdown.Menu>
            </Dropdown>
          
            )
       
    })
    
    //console.log()
    
    
    
    return <div>{Subjects(props.division)}</div>
}
export class VideoDropDown extends React.Component{
    render(){
        return(<Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button}  variant="outline" eventKey="0">
              JSS
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Subjects history={this.props.history} onClick={this.props.onClick} division="1" />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button}  variant="outline" eventKey="1">
              SSS
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
               <Subjects history={this.props.history} onClick={this.props.onClick} division="2" />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
           
            
        )
    }
    
}