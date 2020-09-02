import React, { Component } from 'react'
import './styles/loginstyle.scss'
import logo from './assests/gif.gif'
import jwt_decode from 'jwt-decode'
import Select from 'react-select'

const techCompanies = [
  { label: "Arthritis", value: 1 },
  { label: "Diabetes", value: 2 },
  { label: "Blood Pressure", value: 3 },
  { label: "Anxiety", value: 4 },
  { label: "Obesity", value: 5 },
  { label: "Hypertenstion", value: 6 },
];

class Profile extends Component {
  constructor() {
    super()
    this.state = {
        first_name: '',
        last_name: '',
        email: '',
        weight: '',
        errors: {}
    }
  }
  
  componentDidMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      weight: decoded.weight,
      height: decoded.height
    })
  }
  render() {
    return (
      <div class="container" >
        <div class="row" >
          <div id="head"class="col-6"> <form noValidate onSubmit={this.onSubmit} style={{width: "400px", marginLeft:"0px"}}>
            <h1 className="h3 mb-3 "><b>Your Profile</b></h1>
            <img src={logo} style={{height: "150px", width:"150px", position: "absolute", left: "10px"}} />
            <div className="form--group" style={{width: "200px", marginTop: "40px"}}>
              <label style={{paddingLeft: "80px"}} >{this.state.first_name}</label>
              <label style={{paddingLeft: "80px"}} >{this.state.last_name}</label>
              <label style={{paddingLeft: "80px"}} >{this.state.email}</label>
              </div>
              <div class="info1"> 
              <h4>Information</h4>
              <label>Weight&nbsp;&nbsp;{this.state.weight}kg</label>
              <label style={{marginLeft:"80px"}}>Height&nbsp;&nbsp;{this.state.height}inch</label>
            </div>
            <div class="info2"> 
                <h4>Information</h4>
                <Select options={ techCompanies } 
          isMulti />
            </div>
          </form>
          </div>
        </div>

      </div>

    )
  }
}

export default Profile
