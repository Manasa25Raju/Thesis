import React, { Component } from 'react'
import logo from './assests/gif.gif'
import jwt_decode from 'jwt-decode'
import Select from 'react-select'
import './styles/profile.scss'

const techCompanies = [
  { label: "Arthritis", value: 1 },
  { label: "Diabetes", value: 2 },
  { label: "Blood Pressure", value: 3 },
  { label: "Anxiety", value: 4 },
  { label: "Obesity", value: 5 },
  { label: "Hypertenstion", value: 6 },
];

class Profile extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }

  constructor() {
    super()
    this.state = {
        first_name: '',
        last_name: '',
        email: '',
        weight: '',
        errors: {},
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

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };


  render() {
    const { profileImg} = this.state
    return (
      <div class="container" >
        <div class="row" >
          <div id="head"class="col-6"> <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 "><b>Your Profile</b></h1>
            <div class="imagepage">
						<img src={profileImg} alt="" id="img" className="img" style={{height: "150px", width: "150px", border: "solid", float: "left"}} />
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler}/>
            <div className="form--group" style={{width: "200px", marginTop: "40px"}}>
              <label style={{paddingLeft: "80px"}} >{this.state.first_name}</label>
              <label style={{paddingLeft: "80px"}} >{this.state.last_name}</label>
              <label style={{paddingLeft: "80px"}} >{this.state.email}</label>
              </div>
              </div>
              <div class="info1"> 
              <h4>Information</h4>
              <label class="weight">Weight</label>
              <label class="weightbox">{this.state.weight}kg</label>
              <label class="height">Height</label>
              <label class="weightbox">{this.state.height}kg</label>
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
