import React, { Component } from 'react'
import { register } from './UserFunctions'
import logo from './assests/gif1.gif'
import './styles/registerStyle.scss'

const techCompanies = [
    { label: "Arthritis", value: 1 },
    { label: "Diabetes", value: 2 },
    { label: "Blood Pressure", value: 3 },
    { label: "Anxiety", value: 4 },
    { label: "Obesity", value: 5 },
    { label: "Hypertenstion", value: 6 },
  ];
  

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            age: '',
            weight: '',
            height: '',
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            weight: this.state.weight,
            height: this.state.height,
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

    render() {
        return (
            <div class="container">
                <div class="row" style={{marginTop: "10px"}}>
                    <div class="register-col">
                        <form noValidate onSubmit={this.onSubmit} class="form-register">
                            <h3 style={{marginBottom: "20px"}}><b>Register</b></h3>
                            <div class="register-form">
                            <img src={logo} style={{ height: "250px", width: "250px" }} />
                           <div class="boxes">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                    className="form"
                                    name="first_name"
                                    aria-label="Enter your First name"
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                    className="form"
                                    name="last_name"
                                    aria-label="Enter your last name"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" >Email Address</label>
                                <input type="email"
                                    className="form"
                                    name="email"
                                    style={{ marginLeft: "20px" }}
                                    aria-label="Enter your Email id"
                                    placeholder="Enter Email Address"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form"
                                    name="password"
                                    style={{ marginLeft: "60px" }}
                                    aria-label="Enter your Password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            </div>
                            </div>
                            <h4 style={{textAlign: "center", marginLeft:"120px"}}>Physical Information</h4>

                            <div class="infoboxes">
                                <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="age"
                                    className="form"
                                    name="age"
                                    style={{ marginLeft: "5px", width:"70px",marginRight: "10px" }}
                                    aria-label="Enter your age"
                                    value={this.state.age}
                                    onChange={this.onChange} />
                            </div> &nbsp;&nbsp;
                            <div className="form-group">
                                <label htmlFor="weight">Weight</label>
                                <input type="weight"
                                    className="form"
                                    name="weight"
                                    style={{ marginLeft: "5px" , width:"70px" }}
                                    aria-label="Enter your weight"
                                    value={this.state.weight}
                                    onChange={this.onChange} />&nbsp;kg &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="form-group" >
                                <label htmlFor="height">height</label>
                                <input type="height"
                                    className="form"
                                    name="height"
                                    style={{ marginLeft: "5px" , width:"70px" }}
                                    aria-label="Enter your height"
                                    value={this.state.height}
                                    onChange={this.onChange} /> &nbsp;cm
                            </div>
                            </div> <br></br>

                            <button id="register" aria-label="click on the button  to register" type="submit" style={{ width: "100px", alignItems: "center", outline: "none"  , color: "black", marginTop:"50px", marginLeft:"20px" }} className="btn_register">
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
