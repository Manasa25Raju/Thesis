import React, { Component } from 'react'

class dashboard extends Component {

  constructor(props) {
    super(props);
    this.gotoprofile = this.gotoprofile.bind(this);
    this.gotoworkout = this.gotoworkout.bind(this);
  }

  gotoprofile() {
    this.props.history.push('/profile');
  }

  gotoworkout() {
    this.props.history.push('/workout');
  }


  render() {
    return (
      <div class="container" >
        <div class="row" >
          <h1 className="para"> Dashboard</h1>
          <button id="workout" onClick={this.gotoworkout} type="submit" aria-label= "Login to view the dashboard" style={{ width: "115px", height: "115px", marginLeft: "210px", borderRadius:"50%", borderColor: "black" }} className="btn btn-">
              Today's workout </button>
              <button id="profile" onClick={this.gotoprofile} type="submit" aria-label= "Login to view the dashboard" style={{ width: "115px", height: "115px", marginLeft: "250px", paddingBottom: "10px", borderRadius:"50%", borderColor: "black" }} className="btn btn-">
              Profile </button>

              <button id="review"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "115px", height: "115px", marginLeft: "145px", marginTop: "40px", borderRadius:"50%", borderColor: "black" }} className="btn btn-">
              Today's Review </button>
              <button id="rewards"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "115px", height: "115px", marginLeft: "370px", paddingBottom: "0px", borderRadius:"50%", borderColor: "black" }} className="btn btn-">
              Rewards </button>

              <button id="month"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "115px", height: "115px", marginLeft: "210px", marginTop: "12px", borderRadius:"50%", borderColor: "black" }} className="btn btn-">
              Monthly Review </button>
              <button id="tips"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "115px", height: "115px", marginLeft: "222px", paddingBottom: "0px", borderRadius:"50%", borderColor: "black" }} className="btn btn-">
              Tips </button>

        </div>

      </div>

    )
  }
}
export default dashboard