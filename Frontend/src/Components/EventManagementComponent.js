import React, { Component } from 'react';

import DisplayComponent from './DisplayComponent.js';

class EventManagementComponent extends Component {

    //remove function
    clearButton = (id) => {
        fetch("http://localhost:2000/events/" + id, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(response => console.log('sucess', JSON.stringify(response)))
        .catch(error => console.error('Error:', error))
        window.location.reload();
    }
    
    editButton = () => {
        //function for edit/patch
    }

    render() {
        return(
            <div>
                <DisplayComponent 
                    clearButton={this.clearButton}
                    editButton={this.editButton}/>
            </div>
        )
    }
}

export default EventManagementComponent;