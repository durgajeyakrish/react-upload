import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Movies from "../Home/Movies.json"
import './SelectShow.css'

const SelectShow = ()=> {
 
  const {ids}=useParams()
let getData=Movies.find((e)=>e.id==ids)

const navigate=useNavigate(); 

const bookingTicket = () =>{
  navigate(`/bookingticket/${getData.moviename}`)
}
  return (
  <> 
    <div className='Routerpage' style={{background:`linear-gradient(to right, black,transparent),url(${getData.backgroundimage})`}}  height="60vh" width="100%">
        <div className='Routerimg'>
          <img src={getData.image}/>
        </div> 
        <div className='btn'>
          <h1>{getData.moviename}</h1>
          <button onClick={()=>bookingTicket()}>Booking Ticket </button>
        </div>
    </div>
    
  </>
  )
}

export default SelectShow;