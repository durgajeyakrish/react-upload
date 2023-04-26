import React, { useEffect, useState } from "react";

const Seat = (props) => {
  console.log(props);
  const seatClassName = props.isBooked ? "booked" : props.isSelected ? "selected" : "";
  const [seata,setSeata]=useState([])
  console.log(seata);
  useEffect(()=>{

  },[])
  console.log(seata);
  const handleClick = () => {
    if (!props.isBooked) {
      props.onSeatSelect(props.seatNumber);
    }
  };

  return (
    <>

    <button
      className={`seat ${seatClassName}`}
      onClick={handleClick}
      disabled={props.isBooked}
    >
      {props.seatNumber}
    </button>
    
    
    </>
   

    
  );
};

export default Seat;