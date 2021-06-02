import React, { Component } from "react";
import "./App.css";
import BlogComponent from "./components/BlogComponent";

import Navigation from "./components/NavigationComponent";
import { POSTS } from "./databases/posts";
import About from "./components/AbountComponent";
import Contact from "./components/ContactComponent";
import Login from "./components/LoginComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: POSTS,
      name: "Katy"
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          {/* <DirectoryComponent posts={this.state.posts}/> */}
          <Route exact path="/" render={(props)=>(<BlogComponent{...props} posts = {this.state.posts}/>)}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/Login" component={Login}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
