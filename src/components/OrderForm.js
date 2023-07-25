import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderForm.css';
import { useParams } from "react-router-dom";
import {useLocation} from'react-router'

const OrderForm = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get('eventId');
 
  console.log("eventId:", eventId);
  const [formData, setFormData] = useState({
    order_Id: '',
    customer_PhoneNumber: '',
    event_Id: eventId, // Set event_Id to the value from the URL
    booking_Date: '',
    number_Of_Tickets: '',
    tot_price: ''
  });

  useEffect(() => {
    // Update the event_Id field whenever the eventId changes in the URL
    setFormData((prevFormData) => ({ ...prevFormData, event_Id: eventId }));
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/orders', formData);
      console.log('Order created:', response.data);
      // Add any success handling or redirects here
    } catch (error) {
      console.error('Error creating order:', error);
      // Add error handling here
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="order_Id">Order ID:</label>
        <input type="text" id="order_Id" name="order_Id" value={formData.order_Id} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="customer_PhoneNumber">Customer Phone Number:</label>
        <input type="text" id="customer_PhoneNumber" name="customer_PhoneNumber" value={formData.customer_PhoneNumber} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="event_Id">Event ID:</label>
        <input type="text" id="event_Id" name="event_Id" value={formData.event_Id} onChange={handleChange}  readOnly/>
        {/* Use 'readOnly' attribute to prevent users from changing the event_Id */}
      </div>
      <div className="form-group">
        <label htmlFor="booking_Date">Booking Date:</label>
        <input type="date" id="booking_Date" name="booking_Date" value={formData.booking_Date} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="number_Of_Tickets">Number of Tickets:</label>
        <input type="number" id="number_Of_Tickets" name="number_Of_Tickets" value={formData.number_Of_Tickets} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="tot_price">Total Price:</label>
        <input type="number" id="tot_price" name="tot_price" value={formData.tot_price} onChange={handleChange} />
      </div>
      <button type="submit" className="submit-button">Create Order</button>
    </form>
  );
};

export default OrderForm;
