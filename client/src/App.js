import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
        
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />

          </div>
      </Router>
    )
  }
}

export default App