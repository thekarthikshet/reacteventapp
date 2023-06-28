import React from 'react'

import Show from './Show'
export default function Showlist(props) {
    console.log(props)
  return (
    props.showlist.map((show,i)=>{return <Show show ={show} key={i} incrementQty={props.incrementQty} index={i}/>})
  )
}

