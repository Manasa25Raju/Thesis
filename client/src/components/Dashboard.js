import React, { Component } from 'react'
import './styles/Dashboardstyle.scss'
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
        {/* <h1 className="para"> Dashboard</h1> */}
        <div class="dashboardpage" >
          <div className="batch1">
          <button id="workout" onClick={this.gotoworkout} type="submit" 
          aria-label= "Login to view the dashboard" className="btn_workout">
              Today's workout </button>
              <button id="profile" onClick={this.gotoprofile} type="submit" 
              aria-label= "Login to view the dashboard" className="btn_profile">
              Profile </button>
              </div>
              <div className="batch2">
              <button id="review"  type="submit" 
              aria-label= "Login to view the dashboard" className="btn_review">
              Today's Review </button>
              <button id="rewards"  type="submit" 
              aria-label= "Login to view the dashboard" className="btn_reward">
              Rewards </button>
              </div>
              <div className="batch3">
              <button id="month"  type="submit" 
              aria-label= "Login to view the dashboard" className="btn_month">
              Monthly Review </button>
              <button id="tips"  type="submit" 
              aria-label= "Login to view the dashboard" className="btn_tip">
              Tips </button>

        </div>
</div>
      </div>

    )
  }
}
export default dashboard