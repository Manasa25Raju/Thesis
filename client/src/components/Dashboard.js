import React, { Component } from 'react'
import './styles/Dashboardstyle.scss'
import { Button, Modal } from 'react-bootstrap'

class dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      msg: false
    }

    this.gotoprofile = this.gotoprofile.bind(this);
    this.gotoworkout = this.gotoworkout.bind(this);
    this.gotorewards = this.gotorewards.bind(this);
    this.gotoreview = this.gotoreview.bind(this);
    this.gotomonth = this.gotomonth.bind(this);

  }

  gotoprofile() {
    this.props.history.push('/profile');
  }

  gotoworkout() {
    this.props.history.push('/workout');
  }

  gotorewards() {
    this.props.history.push('https://www.amazon.de/');
  }

  gotoreview() {
    this.props.history.push('/review')
  }

  gotomonth() {
    this.props.history.push('/month')
  }

  handelModal() {
    this.setState({ show: !this.state.show })
  }
    Msg() {
    this.setState({ msg: !this.state.msg })
    console.log("hellooo")
  }


  render() {
    return (
      <div class="container" >
        <div class="dashboardpage" >
          <div className="batch1">
            <button id="workout" onClick={this.gotoworkout} type="submit"
              aria-label="Login to view the dashboard" className="btn_workout">
              Today's workout </button>
            <button id="profile" onClick={this.gotoprofile} type="submit"
              aria-label="Login to view the dashboard" className="btn_profile">
              Profile </button>
          </div>
          <div className="batch2">
            <button id="review" type="submit" onClick={this.gotoreview}
              aria-label="Login to view the dashboard" className="btn_review">
              Today's Review </button>
            <>
              <Button variant="primary" onClick={() => { this.handelModal() }} style={{ width: "100px", height: "115px", marginLeft: "200px", marginTop: "10px", borderRadius: "20%", borderColor: "black", backgroundColor: "#458d89", fontSize: "mediun", textAlign: "center", fontWeight: "bold", border: "none", color: "black" }}>
                Rewards
        </Button>

              <Modal show={this.state.show} >
                <Modal.Header>
                  <Modal.Title><p style={{color: "blue"}}>Congratulations won a reward 🏆</p></Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                <img src="https://acegif.com/wp-content/uploads/gift-5-gap.jpg" style={{width: "350px", height:"350px", marginLeft:"50px"}}/>
                <td onClick={() => window.open("https://www.amazon.de/", "_blank")}>Click <u>here</u> to collect your coupons</td> 
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => { this.handelModal() }}>
                    OK
            </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
          <div className="batch3">
            <button id="month" type="submit" onClick={this.gotomonth}
              aria-label="Login to view the dashboard" className="btn_month">
              Monthly Review </button>
              
              <>
              <Button variant="primary" onClick={() => { this.Msg() }} style={{ width: "115px", height: "115px", marginLeft: "70px", borderRadius: "50%", borderColor: "black", backgroundColor: "#458d89", fontSize: "mediun", textAlign: "center", fontWeight: "bold", border: "none", color: "black" }}>
                Tips
        </Button>

              <Modal show={this.state.msg} >
                <Modal.Header>
                  <Modal.Title>Tips for the day</Modal.Title>
                </Modal.Header>
                <Modal.Body> tip 1  </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => { this.Msg() }}>
                    OK
            </Button>
                </Modal.Footer>
              </Modal>
            </>
            
          </div>
        </div>
      </div>
    )
  }
}
export default dashboard
