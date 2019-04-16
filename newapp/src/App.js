import React, { Component } from 'react';
import NavBar from './Components/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Post from './Components/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route path='/:post_id' component={Post}/>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
