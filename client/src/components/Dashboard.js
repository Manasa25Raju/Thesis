import React, { Component } from 'react'
import './styles/Dashboardstyle.scss'
import { Button, Modal } from 'react-bootstrap'

class dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
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
              <Button variant="primary" onClick={() => { this.handelModal() }} style={{ width: "100px", height: "115px", marginLeft: "440px", marginTop: "30px", borderRadius: "20%", borderColor: "black", backgroundColor: "#458d89", fontSize: "mediun", textAlign: "center", fontWeight: "bold", border: "none", color: "black" }}>
                Rewards
        </Button>

              <Modal show={this.state.show} >
                <Modal.Header>
                  <Modal.Title>You have a reward 🎁</Modal.Title>
                </Modal.Header>
                <Modal.Body> <td onClick={() => window.open("https://www.amazon.de/", "_blank")}>Click <u>here</u> to collect your coupons</td> </Modal.Body>
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

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm" style={{ width: "115px", height: "115px", marginLeft: "270px", marginTop: "5px", borderRadius: "50%", borderColor: "black", backgroundColor: "#458d89", fontSize: "mediun", textAlign: "center", fontWeight: "bold", border: "none", color: "black" }}>Tips</button>
            <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                <div class="modal-header">
                  tips for the day
                  </div>
                  <div class="modal-body">
                  tips for the day<br></br>tips for the day<br></br>tips for the day<br></br>tips for the day<br></br>tips for the day<br></br>tips for the day<br></br>
                  </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: "blue"}}>OK</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default dashboard
