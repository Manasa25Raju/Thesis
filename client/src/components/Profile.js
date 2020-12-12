import React, { Component } from 'react'
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
  state = {
    profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }

  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      age: '',
      weight: '',
      height: '',
      // disease: '',
      errors: {},
    }
    // this.onChange = this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value })
  // }
  // onSubmit(e) {
  //   e.preventDefault()

  //   const user = {
  //     first_name: this.state.first_name,
  //     last_name: this.state.last_name,
  //     email: this.state.email,
  //     age: this.state.age,
  //     weight: this.state.weight,
  //     height: this.state.height,
  //     disease: this.state.disease,
  //   }
  // }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      age: decoded.age,
      weight: decoded.weight,
      height: decoded.height
    })
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  render() {
    const { profileImg } = this.state
    return (
      <div class="container" >
        <div class="row" style={{marginTop: "20px"}}>
          <div id="head" class="col-6"> <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 "><b>Your Profile</b></h1>
            <div class="imagepage">
              <img src={profileImg} alt="" id="img" className="img" style={{ height: "150px", width: "150px", border: "solid", float: "left", marginLeft: "30px"}} />
              <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} style={{fontSize: "8px", position: "absolute", marginTop: "70px", marginLeft: "-310px", opacity: "10%"}} />
              <div className="form--group" style={{ width: "200px", marginTop: "40px" }}>
                <input value={this.state.first_name} class="details"></input>
                <input value={this.state.last_name} class="details"></input>
                <input value={this.state.email} class="details"></input>
              </div>
            </div>
            <div class="health_info">
              <h4 style={{marginTop: "200px", textAlign: "left"}}>Physical Information</h4>
              <div class="info2"  style={{marginTop:"15px"}}>
                <label class="age">Age 
              <input value={this.state.age} class="box"></input>
                </label> &nbsp; &nbsp; &nbsp; &nbsp;
              <label class="weight">Weight 
              <input class="box" value={this.state.weight} ></input> kg&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <label class="height">Height 
              <input class="box" value={this.state.height}></input> cm</label>
              </div>
            </div> 
            <div class="info3"  style={{marginTop:"15px"}}>
              <h4 style={{ textAlign: "left" , marginTop: "10px"}}>Health issues</h4>
              <Select options={techCompanies} isMulti />
            </div>
            
            <button id="register"  style={{ width: "100px", alignItems: "center", outline: "none"  , color: "black", marginTop: "10px"}} className="btn_register">
              Done
            </button>

          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

