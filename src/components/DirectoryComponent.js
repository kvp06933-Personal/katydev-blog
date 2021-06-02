import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class DirectoryComponent extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
         const directory = this.props.posts.map( post => {
        return(
            <Card key={post.id} style={{ width: '15rem' }}>
                <Card.Img variant="top" src="/assets/images/mountain-1.jpg" />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    {post.content}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    })
        return ( 
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
         );
    }
}
 
export default DirectoryComponent;