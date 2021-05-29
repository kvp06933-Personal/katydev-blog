<<<<<<< HEAD

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
=======
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';
import {POSTS} from './databases/posts';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts: {POSTS}
>>>>>>> a96c6ef2550f3e6069aee9673c729e68e043f1f9
    }
  }
  render(){
  return (
    <div className="App">
<<<<<<< HEAD
      <div className="test">
          <BlogComponent/>
          <DirectoryComponent posts={this.state.posts}/>
      </div>
=======
      <Navigation/>
>>>>>>> a96c6ef2550f3e6069aee9673c729e68e043f1f9
    </div>
  );
}
}

export default App;
