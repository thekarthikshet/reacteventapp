import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";



const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const navigate = useNavigate(); 
 
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = events.filter((event) =>
      event.event_Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleEventClick = (eventId) => {
    // Handle event click, e.g., navigate to event details page
    console.log("Clicked event with ID:", eventId);
  };

  const handleBookClick = (eventId) => {
    // Handle book button click
    console.log("Clicked book button for event with ID:", eventId);
    // Navigate to the OrderForm page with the autofilled Event ID
    navigate(`/order-form?eventId=${eventId}`);
  };

  let eventsToRender;
  if (filteredEvents.length > 0) {
    eventsToRender = filteredEvents;
  } else {
    eventsToRender = events;
  }

  return (
    <div>
      {events.length > 0 && <Navbar onSearch={handleSearch} />}
      <h1></h1>
      <ul>
        {eventsToRender.map((event) => (
          <li key={event.event_Id}>
            <div
              className="event-card"
              onClick={() => handleEventClick(event.event_Id)}

             
            >
              {/* <div
                // style={{
                 
                //   //height: "100px",
                //   backgroundColor: "gray",
                // }}
              > */}
                <h3>{event.event_Name}</h3>
                <p>{event.event_Description}</p>
                <p>Date: {event.event_Date}</p>
                <p>Time: {event.event_Time}</p>
                <p>Venue: {event.event_Venue}</p>
                <p>Seats: {event.event_Seats}</p>
                <p>Price: {event.price}</p>
                <button className="book-button" onClick={() => handleBookClick(event.event_Id)}>
                  Book
                </button>
              {/* </div> */}
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .event-card {
          background-color: #F9F5EB;
          padding: 16px;
          margin-bottom: 16px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
          cursor: pointer;
          
          transition: background-color 0.3s ease;
        }
        .event-card:hover {
          background-color: #D7C0AE;
        }
      
        .book-button {
          background-color: #FF8551;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }

        .book-button:hover {
          background-color: #CD1818;
        }

        .book-button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default EventList;
