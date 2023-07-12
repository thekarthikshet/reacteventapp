import './App.css';
import Navbar from './components/Navbar';
import Showlist from './components/Showlist.js';
import Footer from './components/Footer.js';
import React, { useState } from 'react';
import EventList from './components/EventList';
import axios from 'axios';

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
      <Navbar />
      <main className='container mt-5'> 
        <Showlist showlist={showlistState} incrementQty={incrementQty} decrementQty={decrementQty} />
      </main>
      <EventList></EventList>
      <Footer totalAmount={totalAmount} resetAll={resetAll}/>
    </>
  );
}

export default App;