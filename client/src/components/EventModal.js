import React from "react";
import { CSSTransition } from "react-transition-group";
import "./EventModal.css";

function EventModal({ event, onClose }) {
  return (
    <CSSTransition in={!!event} timeout={300} classNames="modal" unmountOnExit>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <h2>{event.name}</h2>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p>{event.description}</p>
          <img src={event.image2} alt={event.name} id="event-img"/>
        </div>
      </div>
    </CSSTransition>
  );
}

export default EventModal;
