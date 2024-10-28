
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
                    
                        <img src={event.image} id="event-image" alt="event"></img>
                        <h2>{event.name}</h2>
                        <p>{event.date}</p>
                        <p id="p1">{event.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventList;
