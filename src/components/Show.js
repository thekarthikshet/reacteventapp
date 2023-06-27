import React from 'react'

export default function Show(props) {
  return (
    <div className='row'>
    <div className='col-6'>
       <h2>{props.show.name}<span class="badge bg-secondary">₹{props.show.price}</span></h2>
    </div>
      
    </div>
  )
}
