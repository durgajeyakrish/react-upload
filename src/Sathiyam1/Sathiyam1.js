import React from 'react'
import { useParams } from 'react-router-dom'
import Movies from '../Home/Movies.json'
import Seatbook from '../Seatbook/Seatbook'
const Sathiyam1 = () => {
    const {seat}=useParams()
    const seatpage=Movies.find((e)=>e.moviename==seat)
    console.log(seatpage)

    return (
        <>
            <div>
                <div>
                   {/* <h1> {seatpage.moviename}</h1> */}
                  <Seatbook />
                </div>
            </div>
            
        </>
    )
}

export default Sathiyam1
