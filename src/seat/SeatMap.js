import React, { useEffect, useState } from "react";
import Seat from "./Seat";
import "./Seat.css"
import { useNavigate, useParams } from "react-router-dom";
import { payment } from "../Redux/Slice";
import { useDispatch } from "react-redux";

const SeatMap = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats);
  const navigate=useNavigate()
  const {id}=useParams();
  const [tAmount,finalAmount]=useState(0)

  const dispatch=useDispatch()

  const payamount =() =>{
    dispatch(payment(selectedSeats))
      navigate(`/payment`)
   }

useEffect(()=>{
  
},[selectedSeats])

const handleSeatSelect = (seatNumber) => {
 
  
   
   if (selectedSeats.includes(seatNumber)) {
    
     setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    
   } else {
    if(id>selectedSeats.length){
     setSelectedSeats([...selectedSeats, seatNumber]);
     let seatPicAmout=selectedSeats.length+1
     finalAmount( seatPicAmout* 190);
    }
   }

   
 };
 


  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const seats = rows.map((row) => (
    <div className="row" key={row}>
      {Array.from({ length: 22}, (_, i) => i + 1).map((seat) => {
        const seatNumber = `${row}${seat}`;

        return (
          <>
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            // isBooked={id}
            isSelected={selectedSeats.includes(seatNumber)}
            onSeatSelect={handleSeatSelect}
          />
          
          </>
        );
      })}
      
    </div>
  ));
console.log(seats);
  return (<><div className="seat-map">{seats}
  </div>
  <div className="container"> 
  <div className="payment">
    {
      selectedSeats.length==id ? (<button  onClick={() => payamount()}>Pay Rs.{tAmount} </button>):null
    }
    
    </div>
    </div>
    </>
    )
};

export default SeatMap;