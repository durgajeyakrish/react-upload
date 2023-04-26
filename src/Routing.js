import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SelectShow from '../src/SelectShow/SelectShow';
import Maincontent from './Component/MainContent/Maincontent';
import Sathiyam from './Sathiyam/Sathiyam';
import Sathiyam1 from './Sathiyam1/Sathiyam1';
import Theator from './Theator/Theator';
import Tpv from './Tpv/Tpv';
import Tpv1 from './Tpv1/Tpv1';
import Udhayam from './Udhayam/Udhayam';
import Udhayam1 from './Udhayam1/Udhayam1';
import SeatMap from './seat/SeatMap';
import Payment from './Payment/Payment';
import { Provider } from 'react-redux';
import store from "./Redux/Store";
import SucessFull from './SucessFull/SucessFull';

const Routing=()=>{
    return(
      <div>
        <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Maincontent/>}></Route>
            <Route path='/selectshow/:ids' element={<SelectShow/>}></Route>
            <Route path='/bookingticket/:ticket' element={<Theator/>}></Route>
            <Route path="/firsttheatre/:Theatre1" element={<Sathiyam/>}></Route>
            <Route path="/secondtheatre/:Theatre2" element={<Tpv/>}></Route>
            <Route path="/thirdtheatre/:Theatre3" element={<Udhayam/>}></Route>
            <Route path="/tpv" element={<Tpv1/>}></Route>
            <Route path="/udhayam" element={<Udhayam1/>}></Route>
            {/* <Route path="/sathiyam/:seat" element={<Sathiyam1/>}></Route>  */}
            <Route path="/theater/:seat" element={<Sathiyam1 />}></Route>
            <Route path="/theater" element={<Tpv1 />}></Route>
            <Route path="/theater" element={<Udhayam1/>}></Route>
            <Route path="/seatBook/:id" element={<SeatMap/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/SucessFull" element={<SucessFull/>}></Route>
            
            
          </Routes>
        </BrowserRouter>
        </Provider>
      </div>
    )
}
export default Routing;

