

import './App.css';
import Navbar from './components/Navbar';
import Showlist from './components/Showlist.js'

function App() {
  const showlist=[
    {
    price:2999,
    name: "Avatar2",
    seats: 10
    },
    {
      price:999,
      name: "KGF",
      seats: 100
      }

  ]
  return (
    <>
    <Navbar/>
    <main className='container mt-5'> 
    <Showlist showlist={showlist}/>
    </main>
    </>
  );
}

export default App;
