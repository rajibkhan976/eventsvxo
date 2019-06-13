import React, { Component } from 'react';

import AddEventComponent from './AddEventComponent.js';
import EventManagementComponent from './EventManagementComponent.js';

class DashboardComponent extends Component {
    render() {
        return(
            <div>
                <AddEventComponent/>
                <EventManagementComponent />
            </div>
        )
    }
}

export default DashboardComponent;