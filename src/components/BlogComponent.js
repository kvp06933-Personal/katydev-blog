import React, { Component } from 'react';

import DirectoryComponent from './DirectoryComponent';


class BlogComponent extends Component {
    
     
    render() { 
        return ( 
            <div className="blog"> 
               <DirectoryComponent posts={this.props.posts}/> 
            </div>
         );
    }
}




 

 

 

 
export default BlogComponent;