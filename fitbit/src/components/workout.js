import React, { Component } from 'react'

class workout extends Component {


  render() {
    return (
      <div class="profile" >
          <h1>Today's Workout
          </h1>
          <div class="workout1">  
          <button id="review"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "300px", height: "250px", marginRight: "20px",
          borderColor: "black", display: "grid"}} className="exercise">
                          <img src="./images/exercise.svg" style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px"}}/>
                          5:00 pm - 6:00 pm <br/> Exercise for the day
              </button>
              <button id="rewards"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "300px", height: "250px", marginRight: "20px",
              paddingBottom: "0px", borderColor: "black", display: "grid" }} className="btn btn-">
                          <img src="./images/yoga.svg" style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px"}}/>
                          7:00 am - 8:00 am  <br/> Yoga for today
              </button>
</div>
<div class="workout2">
              <button id="month"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "300px", height: "250px", marginRight: "20px",
              borderColor: "black", display: "grid"}} className="btn btn-">
                          <img src="./images/walk.svg" style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px"}}/>
                          Walking <br/> Goal   15,000 steps
              </button>
              <button id="tips"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "300px", height: "250px",
              paddingBottom: "0px", borderColor: "black", display: "grid"}} className="btn btn-">
                          <img src="./images/water.svg" style={{width: "100px", height: "100px", marginLeft: "100px", marginTop: "20px"}}/>
                          Water intake <br/> Goal   1.2 liters
              </button>
              </div>

      </div>
    )
  }
}

export default workout