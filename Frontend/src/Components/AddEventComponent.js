import React, { Component } from 'react';

class AddEventComponent extends Component {

  constructor (props) {
    super (props);

    this.state = {
      toggleRegistrationForm: true
    };
  }

  handleEventTitle = (e) => {
    this.eventTitle = e.target.value;
  }

  handleEventStartYear = (e) => {
    this.eventStartYear = e.target.value;
  }

  handleEventStartMonth = (e) => {
    this.eventStartMonth = e.target.value;
  }

  handleEventStartDay = (e) => {
    this.eventStartDay = e.target.value;
  }

  handleEventStartTime = (e) => {
    this.eventStartTime = e.target.value;
  }

  handleEventEndYear = (e) => {
    this.eventEndYear = e.target.value;
  }

  handleEventEndMonth = (e) => {
    this.eventEndMonth = e.target.value;
  }

  handleEventEndDay = (e) => {
    this.eventEndDay = e.target.value;
  }

  handleEventEndTime = (e) => {
    this.eventEndTime = e.target.value;
  }

  handleEventLocation = (e) => {
    this.eventLocation = e.target.value;
  }

  handleEventPrice = (e) => {
    this.eventPrice = e.target.value;
  }

  handleEventCategory = (e) => {
    this.eventCategory = e.target.value;
  }

  handleEventTags = (e) => {
    this.eventTags = e.target.value;
  }

  handleEventAdditionalInfo = (e) => {
    this.eventAdditionalInfo = e.target.value;
  }

  handleEventHost = (e) => {
    this.eventHost = e.target.value;
  }

  handleEventImg = (e) => {
    this.eventImg = e.target.value;
  }

  addEvent = (e) => {
    if (
      this.eventTitle !== undefined &&
      this.eventStartYear !== undefined &&
      this.eventStartMonth !== undefined &&
      this.eventStartDay !== undefined &&
      this.eventStartTime !== undefined &&
      this.eventEndYear !== undefined &&
      this.eventEndMonth !== undefined &&
      this.eventEndDay !== undefined &&
      this.eventEndTime !== undefined &&
      this.eventLocation !== undefined &&
      this.eventPrice !== undefined &&
      this.eventCategory !== undefined &&
      this.eventTags !== undefined &&
      this.eventAdditionalInfo !== undefined &&
      this.eventHost !== undefined &&
      this.eventImg !== undefined
    ) {
      fetch("http://localhost:2000/events", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          'Access-Control-Allow-Credentials': 'true',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.eventTitle,
          start_date: {
            year: this.eventStartYear,
            month: this.eventStartMonth,
            day: this.eventStartDay,
            time: this.eventStartTime
          },
          end_date: {
            year: this.eventEndYear,
            month: this.eventEndMonth,
            day: this.eventEndDay,
            time: this.eventEndTime
          },
          location: this.eventLocation,
          price: this.eventPrice,
          category: this.eventCategory,
          tags: this.eventTags,
          additional_info: this.eventAdditionalInfo,
          host: this.eventHost,
          img: this.eventImg
        })
      }).then((res) => {
        alert('Event registered successfully:)');
        this.setState({
          toggleRegistrationForm: false
        });
      }).catch((err) => {
        alert(err);
      })
    } else {
      alert('Please fill in the information correctly!');
    }
  }

    render() {
        return(
          <div>
          {this.state.toggleRegistrationForm ?
            <div className = "row">
              <div className = "col-12">
                <h2>Event registration</h2>
                <div className="form-group">
                  <label className="float-left">Title :</label>
                  <input id="eventTitle" className="form-control" type="text" onChange= {this.handleEventTitle}/>
                </div>
                <div className = "row">
                  <div className ="col-6">
                    <h5>Start date</h5>
                    <div className="form-group">
                      <label className="float-left">Year :</label>
                      <input id="eventStartYear" className="form-control" type="number" onChange= {this.handleEventStartYear}/>
                    </div>
                    <div className="form-group">
                      <label className="float-left">Month :</label>
                      <input id="eventStartMonth" className="form-control" type="number" onChange= {this.handleEventStartMonth}/>
                    </div>
                    <div className="form-group">
                      <label className="float-left">Day :</label>
                      <input id="eventStartDay" className="form-control" type="number" onChange= {this.handleEventStartDay}/>
                    </div>
                    <div className="form-group">
                      <label className="float-left">Time :</label>
                      <input id="eventStartTime" className="form-control" type="text" onChange= {this.handleEventStartTime}/>
                    </div>
                  </div>
                  <div className = "col-6">
                    <h5>End date</h5>
                    <div className="form-group">
                      <label className="float-left">Year :</label>
                      <input id="eventEndYear" className="form-control" type="number" onChange= {this.handleEventEndYear}/>
                    </div>
                    <div className="form-group">
                      <label className="float-left">Month :</label>
                      <input id="eventEndMonth" className="form-control" type="number" onChange= {this.handleEventEndMonth}/>
                    </div>
                    <div className="form-group">
                      <label className="float-left">Day :</label>
                      <input id="eventEndDay" className="form-control" type="number" onChange= {this.handleEventEndDay}/>
                    </div>
                    <div className="form-group">
                      <label className="float-left">Time :</label>
                      <input id="eventEndTime" className="form-control" type="text" onChange= {this.handleEventEndTime}/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="float-left">Location :</label>
                  <input id="eventLocation" className="form-control" type="text" onChange= {this.handleEventLocation}/>
                </div>
                <div className="form-group">
                  <label className="float-left">Price :</label>
                  <input id="eventPrice" className="form-control" type="text" onChange= {this.handleEventPrice}/>
                </div>
                <div className="form-group">
                  <label className="float-left">Category :</label>
                  <input id="eventCategory" className="form-control" type="text" onChange= {this.handleEventCategory}/>
                </div>
                <div className="form-group">
                  <label className="float-left">Tags :</label>
                  <input id="eventTags" className="form-control" type="text" onChange= {this.handleEventTags}/>
                </div>
                <div className="form-group">
                  <label className="float-left">Additional info :</label>
                  <textarea className="form-control" id="eventAdditionalInfo" rows="3" onChange= {this.handleEventAdditionalInfo}></textarea>
                </div>
                <div className="form-group">
                  <label className="float-left">Host :</label>
                  <input id="eventHost" className="form-control" type="text" onChange= {this.handleEventHost}/>
                </div>
                <div className="form-group">
                  <label className="float-left">Image :</label>
                  <input id="eventImg" type="file" accept="image/png, image/jpeg" onChange= {this.handleEventImg}/>
                </div>
                <button type="button" className="btn btn-success" onClick={this.addEvent}>Submit</button>
              </div>
            </div>
            : null
          }
          </div>
        )
    }
}

export default AddEventComponent;
