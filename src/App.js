import './App.css';
import Navbar from './components/Navbar';
import Showlist from './components/Showlist.js';
import React, { useState } from 'react';

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

  const incrementQty = (index) => {
    let newShowlist = [...showlistState];
    newShowlist[index].seats++;
    setShowlistState(newShowlist);
  };

  return (
    <>
      <Navbar />
      <main className='container mt-5'> 
        <Showlist showlist={showlistState} incrementQty={incrementQty} />
      </main>
    </>
  );
}

export default App;