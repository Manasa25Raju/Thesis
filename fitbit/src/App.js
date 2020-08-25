import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import dashboard from './components/dashboard';
import login from './components/login';
import profile from './components/profile'
import workout from './components/workout'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={login} />

        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/profile" component={profile} />
        <Route exact path="/workout" component={workout} />

        </div>
      </Router>
    )
  }
}

export default App