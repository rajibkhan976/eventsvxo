import React, { Component } from 'react';

import styles from '../CSS/display.module.css';
import clear from './clear.svg';
import edit from './edit.svg';

class DisplayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            showMore: true,
        }
    }

    //icons
    clear = clear;
    edit = edit;

    //GET all the events
    componentDidMount = () => {
        fetch("http://localhost:2000/events")
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                events: data
            })
        })
    }

    render() {
        const events = this.state.events;
        return(
            <div className={styles.display}>
                {events.map((event, i) =>
                    <div key={i} className={styles.card}>
                        <img src={event.img} alt="related to the event" className={styles.chosenImg}/>
                        <div className={styles.icons}>
                            <img src={this.clear} onClick={ () => this.props.clearButton(event._id) } alt="remove icon"/>
                            <img src={this.edit} onClick={this.props.editButton} alt="edit icon"/>
                        </div>
                        <div className={styles.container}>
                            <h3 className={styles.title}>{event.title}</h3>
                            <div>
                            <p className={styles.p}><b>Start: </b>{event.start_date.year}-{event.start_date.month}-{event.start_date.day}</p>
                            <p className={styles.p}><b>End: </b>{event.end_date.year}-{event.end_date.month}-{event.end_date.day}</p>
                            <p className={styles.p}><b>Time: </b>{event.start_date.time} - {event.end_date.time}</p>
                            <p className={styles.p}><b>Location: </b>{event.location}</p>
                            <p className={styles.p}><b>Price: </b>{event.price}</p>
                            <p className={styles.p}><b>Additional Information: </b><br/>{event.additional_info}</p>
                            <p className={styles.p}><b>Category: </b>{event.category}</p>
                            <p className={styles.p}><b>Tags: </b>{event.tags}</p>
                            <p className={styles.p}><b>Host: </b>{event.host}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default DisplayComponent;
