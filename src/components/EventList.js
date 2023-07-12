import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the list of events when the component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Send a GET request to the '/events' endpoint of the backend
      const response = await axios.get('http://localhost:8080/events');
      // Update the 'events' state with the response data
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.event_Id}>
            <h3>{event.event_Name}</h3>
            <p>{event.event_Description}</p>
            <p>Date: {event.event_Date}</p>
            <p>Time: {event.event_Time}</p>
            <p>Venue: {event.event_Venue}</p>
            <p>Seats: {event.event_Seats}</p>
            <p>Price: {event.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
