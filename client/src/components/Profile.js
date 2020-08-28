import React, { Component } from 'react'
import './styles/loginstyle.scss'
import logo from './assests/gif.gif'
import { login } from './UserFunctions'



class Profile extends Component {
  constructor() {
    super()
    this.state = {
        first_name: '',
        last_name: ''
    }
  }

  render() {
    return (
      <div class="container" >
        <div class="row" >
          <div id="head"class="col-6"> <form noValidate onSubmit={this.onSubmit} style={{width: "400px", marginLeft:"0px"}}>
            <h1 className="h3 mb-3 "><b>Your Profile</b></h1>
            <img src={logo} style={{height: "150px", width:"150px", position: "absolute", left: "10px"}} />

            <div className="form-group">
    <label htmlFor="email" style={{paddingLeft: "100px"}}></label>
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{paddingLeft: "80px"}} >Password</label>
            </div>

          </form>
          </div>
        </div>

      </div>

    )
  }
}

export default Profile
