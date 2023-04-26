import React from 'react'
import { useNavigate } from "react-router-dom";
import './SucessFull.css';
const SucessFull = () => {
    const navigate=useNavigate();
    const goBack=()=>{
        navigate('/');
        
    }
  return (
    <div className="animation_success">
    <div className='sucess-page'>   
        <img src="https://static.vecteezy.com/system/resources/previews/017/177/933/original/round-check-mark-symbol-with-transparent-background-free-png.png" width="50%"></img>
        <p>Payment Successfull</p>
        <div className="ani-btn">
            <button onClick={goBack}>Go Back</button>
        </div>
    </div>
</div>
  )
}

export default SucessFull
