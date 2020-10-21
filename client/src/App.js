import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Workout from './components/Workout'
import Profile from './components/Profile'
import Video from './components/video'
import Review from './components/Review'
import Month from './components/Month'
import Header from "./components/header";
import Footer from "./components/footer";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container" >
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/workout" component={Workout} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/month" component={Month} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App