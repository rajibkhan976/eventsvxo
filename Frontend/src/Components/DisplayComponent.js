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
            error: undefined,
            toggleInfo: [],
            info: false,
        }
    }

    //icons
    clear = clear;
    edit = edit;

    //GET all the events
    componentDidMount = () => {
        this.getEvents();
    }

    getEvents = (e) => {
      fetch("http://localhost:2000/events")
      .then((res) => {
          return res.json();
      })
      .then((data) => {
          this.setState({
              events: data
          });
      })
      .catch((err) => {
        this.setState({
          error: err
        });
      });
    };

    showMore = (toggleIndex, e) => {
        for (var eventIndex in this.state.events) {
            if (toggleIndex == eventIndex) {
              if (!this.state.toggleInfo.includes(toggleIndex)) {
                this.setState(prevState => ({
                    toggleInfo: [...prevState.toggleInfo, toggleIndex],
                    info: true
                }));
                } else if (this.state.toggleInfo.includes(toggleIndex)) {
                    this.setState({
                        toggleInfo: this.state.toggleInfo.filter((value) => {return (value !== toggleIndex)})
                    });
                }
            }
        }
    }

    render() {
        const events = this.state.events;
        return(
          <div>
            <h2 className={styles.header}>Events in Växjö</h2><hr/>
            <div className={styles.display}>
                {events.map((event, index) =>
                    <div key={index} className={styles.card}>
                        <img 
                            src={event.img} 
                            alt="related to the event" 
                            className={styles.chosenImg} 
                            title="Click on this image to show/hide more information" 
                        />
                        <div className={styles.icons}>
                            <img 
                                src={this.clear} 
                                onClick={ (e) => this.props.clearButton(event._id) } 
                                alt="remove icon"
                            />
                            <img 
                                src={this.edit} 
                                onClick={(e) => this.props.editButton(event._id) } 
                                alt="edit icon"
                            />
                        </div>
                        <div className={styles.container}>
                            <h3 className={styles.title}>{event.title}</h3>
                            <div>
                            <p className={styles.p}><b>Start: </b>{event.start_date.year}-{event.start_date.month}-{event.start_date.day}</p>
                            <p className={styles.p}><b>End: </b>{event.end_date.year}-{event.end_date.month}-{event.end_date.day}</p>
                            <p className={styles.p}><b>Time: </b>{event.start_date.time} - {event.end_date.time}</p>
                            <p className={styles.p}><b>Location: </b>{event.location}</p>
                            </div>
                            {(this.state.info && this.state.toggleInfo.includes(index)) 
                            ?
                            <div>
                            <p className={styles.p}><b>Price: </b>{event.price}</p>
                            <p className={styles.p}><b>Additional Information: </b><br/>{event.additional_info}</p>
                            <p className={styles.p}><b>Category: </b>{event.category}</p>
                            <p className={styles.p}><b>Tags: </b>{event.tags}</p>
                            <p className={styles.p}><b>Host: </b>{event.host}</p>
                            </div>
                            : null
                            }
                        </div>
                        <div className={styles.buttonPosition}>
                                {this.state.showMore
                                ?
                                <button className={styles.button} onClick={(e) => this.showMore(index, e)}>Show more information</button>
                                :
                                <button className={styles.button} onClick={(e) => this.showMore(index, e)}>Show less</button>}
                        </div>
                    </div>
                )}
            </div>
          </div>
        )
    }
}

export default DisplayComponent;