import { Accordion } from '@mui/material'
import React from 'react'
import './Payment.css'
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import "./Payment.css";
import { useSelector } from 'react-redux'
import { payment } from '../Redux/Slice';
import { useNavigate } from 'react-router-dom';



// import '/Payment.css'

const Payment = () => {
  const navigate=useNavigate()

  const state=useSelector((state)=>state.payment.payment);
  console.log(state);
  let setBook=state.length*190;
  let total=state.length*190+70;
  const paytotal= () =>{
    navigate(`/SucessFull`)
  }
  return (
    <div className="payment-section">
      <div className="payment-container">
        <div className="payment-row">
          <h2>BOOKING SUMMARY</h2>
          <ul className="payment-details">
            <li>
            <span> DIAMOND :</span>
              {
                state.map((e)=>{
                  return(<>
                    <span>{e}</span>
                    </>
                  )
                })
              }
              <div>Rs.{setBook}</div>
              
            </li>
            <li>
              <div style={{ width: "100%" }}>
                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary
                    style={{ padding: 0 }}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ExpandMoreIcon
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "50%",
                        marginRight: "8px",
                        width: "auto",
                      }}
                    />
                    <Typography className="payBill" style={{ width: "95%" }}>
                      <span>Convenience fees</span>
                      <span>Rs 70</span>
                    </Typography>
                  </AccordionSummary>
                  
                </Accordion>
              </div>
            </li>
           
              <div style={{ color: "gray", fontSize: "13px" }}>
                Your current state is<span className="color"> Tamil Nadu</span>
              </div>
           
          </ul>
        </div>
        <div className="payment-amount">
          <div>Amount Payable</div>
          <div>Rs.{total}</div>
        </div>
        
        <div>
          <p>
            By proceeding, I express my consent to complete this transaction.
          </p>
          <Button
            variant="contained"
            style={{ textTransform: "none", justifyContent: "space-between" }}
            className="total-btn"
            sx={{ p: 2 }}
            >
            TOTAL: Rs.{total}
            <span className="proceed" onClick={() =>paytotal()}>Proceed</span>
          </Button>
        </div>
      </div>
    </div>
    
  );
};

export default Payment
