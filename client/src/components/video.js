import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './styles/workout.scss'
import { Player, PosterImage } from 'video-react';


class video extends Component {

  render() {
    return (
      <div class="videoplayer" >
  <Player class="video"
      
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />      
    </div>
    )
  }
}
export default video