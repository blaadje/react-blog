import React, { Component } from 'react';
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
  </div>
)
const About = ({ match }) => (
  <div>
    <h2>About</h2>
  </div>
)

export default class Content extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/topics'>topics</Link></li>
          </ul>
          <Route exact={true} path='/' component={Home}/>
          <Route path='/topics' component={Topics}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}



