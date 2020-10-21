import React, { Component } from 'react'
import './styles/loginstyle.scss'
import logo from './assests/gif.gif'

class Landing extends Component {

  render() {
    return (
      <div class="container" >
          <div id="head1" class="col-7">
            <p>
              <h1 style={{marginLeft:"50px"}}>Health Gain</h1> <br></br>
            </p>
            <img src={logo} />
          </div>
        <div class="links">
          <b><a href='./login'>Sign-in</a> /
            <a href='./register'>Register</a></b>
        </div>
      </div>
    )
  }
}

export default Landing
