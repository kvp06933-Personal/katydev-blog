import React, { Component } from 'react';

class DirectoryComponent extends Component {
    constructor(props){
        super(props)
        this.state = { 
            selectedPost: null
         }
    }
    
    render() { 
        const directory = this.state.posts.map(post => {
            return(
                <div className="col">
                    <img src = {post.image} alt={post.title}/>
                    <h2>{post.name}</h2>
                    
                </div>
            )
        })
        return ( {directory} );
    }
}
 
export default DirectoryComponent;