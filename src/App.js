
import React, {Component} from 'react';
import './App.css';
import BlogComponent from './components/BlogComponent';
import DirectoryComponent from './components/DirectoryComponent';
import {POSTS} from './shared/posts';


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      posts: POSTS
    }
  }
  render(){
  return (
    <div className="App">
      <div className="test">
          <BlogComponent/>
          <DirectoryComponent posts={this.state.posts}/>
      </div>
    </div>
  );
}
}

export default App;
