import React, { Component } from 'react'
import { register } from './UserFunctions'
import logo from './assests/gif1.gif'

// import { Link, withRouter } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            weight: '',
            height: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            weight: this.state.weight,
            height: this.state.height
        }
        
        const errors = {}
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        errors.email = !user.email.match(emailformat) ?
            "Invalid Email" : ""
        errors.password = user.password.length < 6 ?
            "Password should be more than 6 characters" : ""
        console.log(errors)

        if (errors.email === "" && errors.password === "") {
            register(user).then(res => {
                this.props.history.push(`/login`)
                alert("Successfully Registered")
            })
        }
        else {
            alert("Invaid email Address or Password");
        }
        
    }
    
    

    render () {
        return (
            <div class="container">
            <div class="row">
            <div class="head2" class="col-6">    <form noValidate onSubmit={this.onSubmit} style={{width: "400px", marginLeft:"0px"}}>
                            <h2 ><b>Register</b></h2>
                            <img src={logo} style={{height: "250px", width:"250px"}} />
{/* <div>
<select>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>

    </div> */}
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="first_name"
                                    aria-label= "Enter your First name"
                                    style={{width:"200px" }}
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="last_name"
                                    aria-label= "Enter your last name"
                                    style={{width:"200px" }}
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email" >Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    aria-label= "Enter your Email id"
                                    style={{width:"200px" }}
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                            
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    aria-label= "Enter your Password"
                                    style={{width:"200px" }}
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                                <div className="form-group">
                                <label>Enter your Weight</label>
                                <input type="weight"
                                    className="form-control"
                                    name="weight"
                                    aria-label= "Enter your Weight"
                                    style={{width:"200px" }}
                                    placeholder="Enter Weight"
                                    value={this.state.weight}
                                    onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                <label>Enter your Height</label>
                                <input type="height"
                                    className="form-control"
                                    name="height"
                                    aria-label= "Enter your Height"
                                    style={{width:"200px" }}
                                    placeholder="Enter Height"
                                    value={this.state.height}
                                    onChange={this.onChange} />
                                </div>

                            <button id="register"  aria-label= "click on the button  to register"  type="submit" style={{width:"100px", alignItems:"center", color:"black"}} className="btn_register">
                                Register
                            </button>
                            
                        </form>
                    </div>
                    </div> 
                    </div> 
                
        )
    }
}

export default Register
