import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Movies from "../Home/Movies.json";
import "./Sathiyam.css"
const Sathiyam = () => {
    const { Theatre1 } = useParams()
    const navigate = useNavigate()
    let array1 = [1, 2, 3, 4, 5];
    const [seat, selectSet] = useState(0)
    console.log(seat);
    //let arr = array1.map;
    const obj = [{
        id: '1',
        image: "https://www.shutterstock.com/image-vector/bike-icon-cartoon-illustration-vector-260nw-552366505.jpg",
    },
    {
        id: '2',
        image: "https://png.pngtree.com/png-vector/20230107/ourmid/pngtree-flat-scooter-png-image_6554348.png",
    },
    {
        id: '3',
        image: "https://www.shutterstock.com/image-illustration/rickshaw-cartoon-260nw-151595942.jpg"
    },
    {
        id: '4',
        image: "https://www.easylinedrawing.com/wp-content/uploads/2019/07/cartoon_car_drawing_tutorial.png"
    },
    {
        id: '5',
        image: "https://static.vecteezy.com/system/resources/thumbnails/008/957/260/small/cartoon-bus-flat-art-illustration-icon-isolated-transportation-design-vector.jpg"
    }
    ]
    let setImage = obj.find((e) => e.id === seat)
    console.log(setImage);

    const bookTicket = () => {

        if(seat==0){

        }
        else{
            navigate(`/seatbook/${seat}`)
        }
        
    }
    return (
        <>
            <div className="Theatreseatmain">
                <h1>{Theatre1}</h1>
                <div className="Theatreseat">
                    <h4>How Many Seats?</h4>
                    <div className="seatimg">
                        {
                            seat == 0 ? (<img src={"https://png.pngtree.com/png-vector/20230107/ourmid/pngtree-flat-scooter-png-image_6554348.png"} width='20%'></img>) : <img src={setImage.image} width='20%'></img>
                        }

                    </div>
                    {
                        <div className="btn-out">
                            {
                                obj.map((e) => {
                                    return (
                                        <>


                                            <span className="button" onClick={() => selectSet(e.id)}
                                                style={
                                                    e.id == seat ? { backgroundColor: " #f84464" } : { color: "black" }
                                                }
                                            >{e.id}</span>

                                        </>
                                    )
                                })
                            }
                        </div>
                    }

                    <div className='rate'>
                        <div>
                            <h3>DIAMOND</h3>
                            <p>Rs.120</p>
                            <h4>Available</h4>
                        </div>
                        <div>
                            <h3>GOLD</h3>
                            <p>Rs.60</p>
                            <h4>Available</h4>
                        </div>
                    </div>
                    <div className='selectseatbutton'>
                        <button onClick={() => bookTicket()}>Select seat</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Sathiyam