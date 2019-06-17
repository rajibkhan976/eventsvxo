import React, { Component } from 'react';

import DisplayComponent from './DisplayComponent.js';

class EventManagementComponent extends Component {

    constructor (props) {
      super (props);

      this.state = {
        error: undefined,
        toggleUpdateForm: false,
        event_id: undefined,
        title: undefined,
        start_year: undefined,
        start_month: undefined,
        start_day: undefined,
        start_time: undefined,
        end_year: undefined,
        end_month: undefined,
        end_day: undefined,
        end_time: undefined,
        location: undefined,
        price: undefined,
        category: undefined,
        tags: undefined,
        additional_info: undefined,
        host: undefined
      };
    }

    //remove function
    clearButton = (id) => {
        fetch("http://localhost:2000/events/" + id, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(response => console.log('sucess', JSON.stringify(response)))
        .catch(error => console.error('Error:', error))
        window.location.reload();
    }

    editButton = (event_id, e) => {
        fetch("http://localhost:2000/events/" + event_id)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            this.setState({
              event_id: data._id,
              title: data.title,
              start_year: data.start_date.year,
              start_month: data.start_date.month,
              start_day: data.start_date.day,
              start_time: data.start_date.time,
              end_year: data.end_date.year,
              end_month: data.end_date.month,
              end_day: data.end_date.day,
              end_time: data.end_date.time,
              location: data.location,
              price: data.price,
              category: data.category,
              tags: data.tags,
              additional_info: data.additional_info,
              host: data.host
            });
        })
        .catch((err) => {
          this.setState({
            error: err
          });
        });
        this.setState({
          toggleUpdateForm: true
        });
    }

    handleEventTitle = (value, e) => {
      this.setState({
        title: value
      });
    }

    handleEventStartYear = (value, e) => {
      this.setState({
        start_year: value
      });
    }

    handleEventStartMonth = (value, e) => {
      this.setState({
        start_month: value
      });
    }

    handleEventStartDay = (value, e) => {
      this.setState({
        start_day: value
      });
    }

    handleEventStartTime = (value) => {
      this.setState({
        start_time: value
      });
    }

    handleEventEndYear = (value, e) => {
      this.setState({
        end_year: value
      });
    }

    handleEventEndMonth = (value, e) => {
      this.setState({
        end_month: value
      });
    }

    handleEventEndDay = (value, e) => {
      this.setState({
        end_day: value
      });
    }

    handleEventEndTime = (value, e) => {
      this.setState({
        end_time: value
      });
    }

    handleEventLocation = (value, e) => {
      this.setState({
        location: value
      });
    }

    handleEventPrice = (value, e) => {
      this.setState({
        price: value
      });
    }

    handleEventCategory = (value, e) => {
      this.setState({
        category: value
      });
    }

    handleEventTags = (value, e) => {
      this.setState({
        tags: value
      });
    }

    handleEventAdditionalInfo = (value, e) => {
      this.setState({
        additional_info: value
      });
    }

    handleEventHost = (value, e) => {
      this.setState({
        host: value
      });
    }

    handleEventImg = (e) => {
      this.eventImg = e.target.value;
    }

    updateEvent = (event_id, e) => {
      if (
        this.state.title !== undefined &&
        this.state.start_year !== undefined &&
        this.state.start_month !== undefined &&
        this.state.start_day !== undefined &&
        this.state.start_time !== undefined &&
        this.state.end_year !== undefined &&
        this.state.end_month !== undefined &&
        this.state.end_day !== undefined &&
        this.state.end_time !== undefined &&
        this.state.location !== undefined &&
        this.state.price !== undefined &&
        this.state.category !== undefined &&
        this.state.tags !== undefined &&
        this.state.additional_info !== undefined &&
        this.state.host !== undefined &&
        this.eventImg !== undefined
      ) {
        fetch("http://localhost:2000/events/" + event_id, {
          method: 'PATCH',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Access-Control-Allow-Credentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: this.state.title,
            start_date: {
              year: this.state.start_year,
              month: this.state.start_month,
              day: this.state.start_day,
              time: this.state.start_time
            },
            end_date: {
              year: this.state.end_year,
              month: this.state.end_month,
              day: this.state.end_day,
              time: this.state.end_time
            },
            location: this.state.location,
            price: this.state.price,
            category: this.state.category,
            tags: this.state.tags,
            additional_info: this.state.additional_info,
            host: this.state.host,
            img: this.eventImg
          })
        }).then((res) => {
          alert('Event updated successfully:)');
          this.setState({
            toggleUpdateForm: false
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
            {(this.state.toggleUpdateForm) ?
              <div className = "container">
                <div className = "col-12">
                  <h2>Update an event</h2>
                  <div className="form-group">
                    <label className="float-left">Title :</label>
                    <input id="eventTitle" className="form-control" type="text" value={this.state.title} onChange= {(e) => this.handleEventTitle(e.target.value)}/>
                  </div>
                  <div className = "row">
                    <div className ="col-6">
                      <h5>Start date</h5>
                      <div className="form-group">
                        <label className="float-left">Year :</label>
                        <input id="eventStartYear" className="form-control" type="number" value={this.state.start_year} onChange= {(e) => this.handleEventStartYear(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label className="float-left">Month :</label>
                        <input id="eventStartMonth" className="form-control" type="number" value={this.state.start_month} onChange= {(e) => this.handleEventStartMonth(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label className="float-left">Day :</label>
                        <input id="eventStartDay" className="form-control" type="number" value={this.state.start_day} onChange= {(e) => this.handleEventStartDay(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label className="float-left">Time :</label>
                        <input id="eventStartTime" className="form-control" type="text" value={this.state.start_time} onChange= {(e) => this.handleEventStartTime(e.target.value)}/>
                      </div>
                    </div>
                    <div className = "col-6">
                      <h5>End date</h5>
                      <div className="form-group">
                        <label className="float-left">Year :</label>
                        <input id="eventEndYear" className="form-control" type="number" value={this.state.end_year} onChange= {(e) => this.handleEventEndYear(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label className="float-left">Month :</label>
                        <input id="eventEndMonth" className="form-control" type="number" value={this.state.end_month} onChange= {(e) => this.handleEventEndMonth(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label className="float-left">Day :</label>
                        <input id="eventEndDay" className="form-control" type="number" value={this.state.end_day} onChange= {(e) => this.handleEventEndDay(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label className="float-left">Time :</label>
                        <input id="eventEndTime" className="form-control" type="text" value={this.state.end_time} onChange= {(e) => this.handleEventEndTime(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="float-left">Location :</label>
                    <input id="eventLocation" className="form-control" type="text" value={this.state.location} onChange= {(e) => this.handleEventLocation(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label className="float-left">Price :</label>
                    <input id="eventPrice" className="form-control" type="text" value={this.state.price} onChange= {(e) => this.handleEventPrice(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label className="float-left">Category :</label>
                    <input id="eventCategory" className="form-control" type="text" value={this.state.category} onChange= {(e) => this.handleEventCategory(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label className="float-left">Tags :</label>
                    <input id="eventTags" className="form-control" type="text" value={this.state.tags} onChange= {(e) => this.handleEventTags(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label className="float-left">Additional info :</label>
                    <textarea className="form-control" id="eventAdditionalInfo" rows="3" value={this.state.additional_info} onChange= {(e) => this.handleEventAdditionalInfo(e.target.value)}></textarea>
                  </div>
                  <div className="form-group">
                    <label className="float-left">Host :</label>
                    <input id="eventHost" className="form-control" type="text" value={this.state.host} onChange= {(e) => this.handleEventHost(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label className="float-left">Image :</label>
                    <input id="eventImg" type="file" accept="image/png, image/jpeg" onChange= {this.handleEventImg}/>
                  </div>
                  <button type="button" className="btn btn-success" onClick={(e) => this.updateEvent(this.state.event_id)}>Submit</button>
                </div>
              </div>
            :
            <DisplayComponent
                clearButton={this.clearButton}
                editButton={this.editButton}/>
          }
            </div>
        )
    }
}

export default EventManagementComponent;
