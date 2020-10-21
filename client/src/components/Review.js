import React, { Component } from 'react'
import './styles/review.scss'
import data from './fitbit.json'
import Carousel from 'carousel'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { xhr };
    // get the url 
    var url = window.location.href;
    //getting the access token from url 
    var access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkJaWE0iLCJzdWIiOiI4TEhRUkciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNjAzMjEzMzI3LCJpYXQiOjE2MDMxODQ1Mjd9.Dbi-d3GrX_oFJ3vkYL-J7Jtk99yZuBqYtDcZOReaC9w";
    // get the userid 
    var userId = "8LHQRG";
    console.log(access_token);
    console.log(userId);

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.fitbit.com/1/user/' + userId + '/activities.json');
    xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
      }
    };

    xhr.send()
  }
  render() {
    const setings ={
      dots: true,
      fade: true,
      infinte: true,
      speed: 500,
      sliderToShow: 1,
      arrow: true,
      slidesToScroll: 1,
      className: "slides"
    }
      return(
        <div class="name">
          <div class="name1">Today's Review</div>
        {data.map((el)=> {
          return (
<Slider {...setings}>
      <div class="info">
        <h3 >
        <img class="image" src = "https://previews.123rf.com/images/ramcreative/ramcreative1707/ramcreative170700022/81692157-man-jogging-in-park-amid-a-big-city-cartoon-illustration-of-a-runner.jpg"/>
Number of steps covered
<input class="inputbox" value={el.total} /><br></br><br></br>
        </h3>
      </div>
      <div class="info">
        <h3> 
        <img class="image" src = "https://previews.123rf.com/images/chudtsankov/chudtsankov1606/chudtsankov160600194/58231600-cartoon-illustation-of-a-water-plastic-bottle-mascot-character-holding-up-a-blank-sign.jpg"/>
          distance covered<input class="inputbox" value={el.distance} /><br></br><br></br></h3>
      </div>
      <div class="info">
        <h3>
          <img class="image" src="https://www.netclipart.com/pp/m/89-893096_heartbeat-png-red-heart-rate-monitor-logo.png"/>
          Calories burnt<input class="inputbox" value={el.caloriesOut} /><br></br></h3>
      </div>
    </Slider>
          )
        }
        )
      }
      </div>
      )
    }
  }
  export default Review
