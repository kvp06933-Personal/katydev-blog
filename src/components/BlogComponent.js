import React, { Component } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import DirectoryComponent from './DirectoryComponent';


class BlogComponent extends Component {
    constructor(props){
        super(props)
    }
     
    render() { 
        return ( 
            <div className="blog"> 
               <DirectoryComponent posts={this.props.posts}/> 
            </div>
         );
    }
}




 

 

 

 
export default BlogComponent;