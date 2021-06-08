import React, { Component } from 'react';
import {Card, Button, Image} from 'react-bootstrap';

class DirectoryComponent extends Component {
    
    
    render() {
         const featured = this.props.posts.map( post => {
        return(
            <Card key={post.id} style={{ width: '15rem' }}>
                <Card.Img variant="top" src="/assets/images/mountain-1.jpg" />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    {post.content}
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        );
    })
         const recent = this.props.posts.map( post => {
        return(
            <div key={post.id} style={{display: 'flex', background: '#fff', marginBottom: '2rem'}}>
                <Image style={{width: '10rem'}} src="/assets/images/mountain-1.jpg" />
                <div>
                    <h1>{post.title}</h1>
                    <p>
                    {post.content}
                    </p>
                    <Button variant="primary">Read More</Button>
                </div>
            </div>
        );
    })

        return ( 
            <div className="container">
                <h1>Featured</h1>
                <div className="row">
                    {featured}
                </div>
                <h1>Recent</h1>
                <div className="row">
                    {recent}
                </div>
            </div>
         );
    }
}
 
export default DirectoryComponent;