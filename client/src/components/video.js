import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './styles/workout.scss'

class video extends Component {

  render() {
    return (
      <div class= "videoplayer">
        <ReactPlayer url="https://youtu.be/MtAdXbCujGk" controls={true}/>
        </div>
    )
  }

}
export default video