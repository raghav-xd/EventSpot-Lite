import React from "react";
import "./EventList.css";



function EventList({ events, onEventClick }) {
    return (
        <div id="container">
            <div className="event-list">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="event-card"
                        onClick={() => onEventClick(event)}>
                    
                        <img src={event.image} id="event-image" alt="event" />
                        <h2>{event.name}</h2>
                        <p>
                            <i className="fas fa-calendar-alt"></i> {event.date}
                        </p>
                        <p id="p1">
                            <i className="fas fa-map-marker-alt"></i> {event.location}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
