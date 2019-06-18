import React, { Component } from 'react';

import styles from '../CSS/dashboard.module.css';

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
            <div>
              <div>
                <div className={styles.header}>
                  <h1 className={styles.fontLogo}>eventsvxo</h1>
                  <h5 className={styles.fontLogo}>All the events in Växjö, gathered in one place</h5>
                </div><br/>
                <div className = "col-12 jumbotron">
                  <h2 className={styles.addFont}>Want to add your event?</h2> <br/>
                  <button type="button" className="btn btn-primary" onClick={this.eventRegistrationFormTogglar}>{this.state.toggleEventRegistrationForm ? 'Close form' : 'Add event'}</button>
                </div>
              </div>
              {this.state.toggleEventRegistrationForm ?
                <AddEventComponent /> :
                null
              }
                <br/>
                <EventManagementComponent />
            </div>
        )
    }
}

export default DashboardComponent;
