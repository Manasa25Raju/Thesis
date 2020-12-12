import React, { Component } from 'react'
import './styles/review.scss'
import data from './fitbit.json'
import Carousel from 'carousel'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from '../components/assests/walking1.jpg'


class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { xhr };
    // get the url 
    var url = window.location.href;
    //getting the access token from url 
    var access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkJaWE0iLCJzdWIiOiI4TEhRUkciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNjA2NzQ5Nzg2LCJpYXQiOjE2MDY3MjA5ODZ9.PHdJVoT6qhQ_vTxMtvsPcHgHxgcxBuB2MjyzevdTNOE";
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
        <img class="image" src = "https://www.henryford.com/-/media/henry-ford-blog/images/mobile-interior-banner-images/2019/03/person-walking-on-path.jpg"/>
Number of steps covered &nbsp;
<input class="inputbox" value={el.total} /><br></br><br></br>
        </h3>
      </div>
      <div class="info">
        <h3> 
        <img class="image" src = "https://www.graphicsfactory.com/clip-art/image_files/image/3/1513043-of-a-water-plastic-bottle-mascot-character-holding-up-a-sign-with-text-drink-more-water-vector-illustration-isolated-on-white-background.jpg"/>
          Water Intake &nbsp; <input class="inputbox" value={el.distance} /><br></br><br></br></h3>
      </div>
      <div class="info">
        <h3>
          <img class="image" src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/02/16ExLoseWeight-1046028108-770x553-1.jpg"/>
          Calories Burnt &nbsp; <input class="inputbox" value={el.caloriesOut} /><br></br></h3>
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
