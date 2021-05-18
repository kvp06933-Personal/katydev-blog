import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';
import {POSTS} from './databases/posts';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts: {POSTS}
    }
  }
  render(){
  return (
    <div className="App">
      <Navigation/>
    </div>
  );
}
}

export default App;
