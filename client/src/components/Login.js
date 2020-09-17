import React, { Component } from 'react'
import { login } from './UserFunctions'
import './styles/loginstyle.scss'
import logo from './assests/gif1.gif'



class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    const errors = {}
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    errors.email = !user.email.match(emailformat) ?
      "Invalid Email" : ""
    errors.password = user.password.length < 6 ?
      "Password should be more than 6 characters" : ""
    console.log(errors)

    if (errors.email === "" && errors.password === "")
      login(user).then(res => {
        if (res) {
          this.props.history.push(`/Dashboard`)

        }
      })
    else {
      alert("Incorrect email id or password");
    }
  }

  render() {
    return (
      <div class="container" >
        <div class="row" >
          <div id="head" class="col-6"> <form noValidate onSubmit={this.onSubmit} style={{ width: "400px", marginLeft: "0px" }}>
            <h1 className="h3 mb-3 "><b>Sign-in</b></h1>
            <img src={logo} style={{ height: "250px", width: "250px" }} />

            <div className="sign-in"  >
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control"
                name="email"
                aria-label="Enter your Email id"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="sign-in"  >
              <label htmlFor="password" >Password</label>
              <input
                className="form-control"
                name="password"
                aria-label="Enter your password"
                placeholder=" Password"
                value={this.state.password}
                onChange={this.onChange}
                type="password" style={{ marginLeft: "60px" }}
              />
            </div>
            <button id="signin" type="submit" aria-label="Login to view the dashboard" className="btn_login">
              Login </button>
            <br></br>
            <br></br>
            <a href="/Register" style={{ color: "black" }} onClick={this.handleClick}>
              <center> New User? Click <u>Here</u> to Register </center>  </a>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
