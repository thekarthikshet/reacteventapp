import './App.css';
import Navbar from './components/Navbar';
import Showlist from './components/Showlist.js';
import Footer from './components/Footer.js';
import React, { useState } from 'react';
import EventList from './components/EventList';
import Form from './components/Form';
import OrderForm from './components/OrderForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this import





function App() {
 
  const initialShowlist = [
    {
      price: 99,
      name: "Avatar2",
      seats: 10
    },
    {
      price: 999,
      name: "KGF",
      seats: 100
    }
  ];

  let [showlistState, setShowlistState] = useState(initialShowlist);
  let [totalAmount, setTotalAmount] = useState(0);
  
  const incrementQty = (index) => {
    let newShowlist = [...showlistState];
    let newTot= totalAmount;
    newTot+=newShowlist[index].price;
    newShowlist[index].seats++;
    setTotalAmount(newTot);
    setShowlistState(newShowlist);
   
  };
  
  const resetAll =()=>  {
    const newShowlist = [...showlistState];
    for (let i in newShowlist) {
      newShowlist[i].seats = 0;
    }
    const newTot = 0;
    setTotalAmount(newTot);
    setShowlistState(newShowlist);
  };
  const jjn=()=>{
    window.location.href ="Form";
  }

  const decrementQty= (index)=>{
    let newShowlist = [...showlistState];
    let newTot= totalAmount;
    if(newShowlist[index].seats>0)
    {
     newShowlist[index].seats--;
     newTot-=newShowlist[index].price;} 
     setTotalAmount(newTot);
    setShowlistState(newShowlist);

  }

  return (
    <>
      
      <main className='container mt-5'> 
       
      </main>
      {/* <Navbar/> */}
      {/* <EventList className='list-event'></EventList> */}
      {/* <Showlist showlist={showlistState} incrementQty={incrementQty} decrementQty={decrementQty} /> */}
     {/* <-- <Navbar /> -> */}
     {/* <button onClick={jjn()}>navbar button</button> */}
     {/* <EventList/> */}
      {/* <Footer totalAmount={totalAmount} resetAll={resetAll}/> */}
      <Routes>
          {/* Route to the EventList component */}
          <Route path="/" element={<EventList />} />

          {/* Route to the OrderForm component */}
          <Route path="/order-form" element={<OrderForm />} />
        </Routes>
      
     
    </>
  );
}

export default App;