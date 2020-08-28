import React, { Component } from 'react'
import './styles/workout.scss'
import exercise from './assests/exercise.gif'
import yoga from './assests/yoga.gif'
import walking from './assests/jog.gif'
import water from './assests/water.gif'
import cal from './assests/cal.png'


const currDate = new Date().toLocaleDateString();

class Workout extends Component {

  render() {
    return (
      <div class="profile" >
          <h1>Today's Workout </h1>
          <img src={cal} style={{position:"absolute", width:"150px", height: "120px",borderRadius: "0px", left: "900px", top: "0px"}}/>
   <b> <p style={{position: "absolute", left: "975px", top: "70px", fontSize: "20px"}}>{currDate}</p> </b>
          <div class="workouts">
          <div class="workout1">  
          <button id="exercise"  type="submit" aria-label= "Login to view the dashboard" className="exercise">
                          <img src={exercise} style={{width:"250px", height: "180px", marginLeft: "10px"}}/>
                          5:00 pm - 6:00 pm <br/> Exercise for the day
              </button>
              <button id="yoga"  type="submit" aria-label= "Login to view the dashboard" className="yoga">
                          <img src={yoga} style={{width:"180px", height: "180px"}}/>
                          7:00 am - 8:00 am  <br/> Yoga for today
              </button>
</div>
<div class="workout2">
              <button id="walk"  type="submit" aria-label= "Login to view the dashboard" className="walk">
                          <img src={walking} style={{width:"180px", height: "180px"}}/>
                          Walking <br/> Goal   15,000 steps
              </button>
              <button id="water"  type="submit" aria-label= "Login to view the dashboard" className="water">
                          <img src={water} style={{marginBottom: "30px"}}/>
                          Water intake <br/> Goal   1.2 liters
              </button>
              </div>
</div>
      </div>
    )
  }
}

export default Workout