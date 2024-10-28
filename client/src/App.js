
import React, { useState } from "react";

import EventList from "./components/EventList";
import EventModal from "./components/EventModal";
import eventsData from "./Data";
import "./App.css";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [page, setPage] = useState("home");

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar-left">
          <h1>EventSpot Lite</h1>
          <p>Welcome!!</p>
        </div>
        <nav className="navbar-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("trending")}>Trending</button>
          <button onClick={() => setPage("schedule")}>Schedule</button>
        </nav>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      {/* <EventList events={filteredEvents} onEventClick={setSelectedEvent} /> */}
      {page === "home" && (
        <EventList events={filteredEvents} onEventClick={setSelectedEvent} />
      )}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}


    </div>
  );
}

export default App;
