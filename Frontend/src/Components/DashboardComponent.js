import React, { Component } from 'react';

import AddEventComponent from './AddEventComponent.js';
import EventManagementComponent from './EventManagementComponent.js';

class DashboardComponent extends Component {
  constructor (props) {
    super (props);

    this.state = {
      toggleEventRegistrationForm: false
    };
  }

  eventRegistrationFormTogglar = (e) => {
    this.setState({
      toggleEventRegistrationForm: !this.state.toggleEventRegistrationForm
    });
  }

    render() {
        return(
            <div className = "container">
              <div className = "row">
                <div className = "col-12 jumbotron">
                  <h1>Want to make your events popular?</h1> <br/>
                  <button type="button" className="btn btn-primary" onClick={this.eventRegistrationFormTogglar}>Add events</button>
                </div>
              </div>
              {this.state.toggleEventRegistrationForm ?
                <AddEventComponent/> :
                null
              }
                <EventManagementComponent />
            </div>
        )
    }
}

export default DashboardComponent;
