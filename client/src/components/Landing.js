import React, { Component } from 'react'
import './styles/loginstyle.scss'
import logo from './assests/gif.gif'


class Landing extends Component {

  render() {
    return (
      <div class="container" >
        <div class="row" style={{height: '500px'}}>
          <div id="head1" class="col-7" style={{ fontsize: "20px", width: "400px", textAlign:"center"}}>
            <p> 
          <h1>Health Gain</h1> <br></br>
          </p>
          <img src={logo} />
          </div>
        </div>
        <div style={{textAlign: "center"}}>
           <b><a href='./login'>Sign-in</a> /
            <a href='./register'>Register</a></b>
</div>

      </div>


    )
  }
}

export default Landing
