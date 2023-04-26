import React from 'react'
import "./Theator.css"
import Movies from '../Home/Movies.json'
import moment from "moment/moment"
import Footer from '../Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'

const Theator = () => {
  const navigate = useNavigate()
  const { ticket } = useParams()
  console.log(ticket);
  let fetchData = Movies.find((e) => e.moviename == ticket)
  const date1 = new Date()
  const date2 = date1.getDate()
  const currentTime = moment().format('LT')
  console.log(currentTime);
  const date3 = new Date()
  const date4 = date3.getDate() + 1;
  const date5=new Date()
  const date6=date5.getDate() + 2;
                
  //let current = new Date
  // console.log(current);

  let tt = "10:30 Am"
  let current = moment(tt, "HH:mm a")
  let tt1 = "2:45 PM"
  let current1 = moment(tt1, "HH:mm a")
  const cur=current1._i;
  console.log(cur)
  console.log(current1,"l");
  let tt2 = "9:45 PM"
  let current2 = moment(tt2, "HH:mm a")
  console.log(current2);
  return (
    <>
      <div className='Theatormainpage'>
        <div className='TheatreHeader'>
          <div className='Theatorcontainer'>
            <h1> {fetchData.moviename}-Tamil</h1>
          </div>
        </div>


        <div className='Theatorcontainer'>
          <div className='Theatorhead'>
            <div className='Theatorcontent'>
              <div className='Theatordate1'>
                
                {date2}
              </div>
              <div className='Theatordate'>
                {date4}
              </div>
              <div className='Theatordate'>
              {date6}
              </div>

            </div>
            <div className='Theatorcontentend'>
              <div className='language'>
                <h4>Tamil-2D</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='extra'>

          <div className='Theatorbackpage'>
            <div className='Theatorcontainer'>
              <div className='Theatresection'>
                <div className='Theatredisplay'>
                  <div className='Theatorname'>
                    <h3>Sathiyam Cinemas : Rayapettah, Chennai </h3>
                  </div>
                  <div className='Theatretime'>
                    {
                      currentTime <= tt ?(
                        <div className='Theatretime1' onClick={() => navigate(`/firsttheatre/${"Sathiyam Cinimas"}`)}>
                        {current._i}
                      </div>
                      ):null
                    }
                      
                   
                    {
                      currentTime <= tt1 ? 
                      <>
                        <div className='Theatretime1' onClick={() => navigate(`/firsttheatre/${"Sathiyam Cinimas"}`)}>
                          {current1._i}
                        </div>
                        </> : null
                    }
                    {
                      currentTime <= tt2 ? <>
                        <div className='Theatretime1' onClick={() => navigate(`/firsttheatre/${"Sathiyam Cinimas"}`)}>
                          {current2._i}
                        </div>
                      </> : null
                    }

                  </div>
                </div>
                <div className='Theatredisplay'> 

                  <div className='Theatorname'>
                    <h3>TPV Multiplex Cinema : Alankulam </h3>
                  </div>
                  
                  <div className='Theatretime'>
                    {currentTime <= tt ? (
                        <div className='Theatretime1' onClick={() => navigate(`/secondtheatre/${"Tpv Cinemas"}`)}>
                        {current._i}
                      </div>
                    ):null 
                  }
                  {currentTime <= tt1 ? (
                        <div className='Theatretime1' onClick={() => navigate(`/secondtheatre/${"Tpv Cinemas"}`)}>
                        {current1._i}
                      </div>
                    ):null
                  }
                  {currentTime <= tt2 ? (
                        <div className='Theatretime1' onClick={() => navigate(`/secondtheatre/${"Tpv Cinemas"}`)}>
                        {current2._i}
                      </div>
                    ):null
                  }
                  </div>
                </div>

                <div className='Theatredisplay'>

                  <div className='Theatorname'>
                    <h3>Udhayam Theatre : Ashokpillar, Chennai </h3>
                  </div>
                 
                  <div className='Theatretime'>
                  {currentTime <= tt ?(
                     <div className='Theatretime1' onClick={() => navigate(`/thirdtheatre/${"Udhayam Cinemas"}`)}>
                     {current._i}
                   </div>
                  ):null
                  }
                   {currentTime <= tt1 ?(
                     <div className='Theatretime1' onClick={() => navigate(`/thirdtheatre/${"Udhayam Cinemas"}`)}>
                     {current1._i}
                   </div>
                  ):null
                  }
                   {currentTime <= tt2 ?(
                     <div className='Theatretime1' onClick={() => navigate(`/thirdtheatre/${"Udhayam Cinemas"}`)}>
                     {current2._i}
                   </div>
                  ):null
                  }
                   
                    
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>

    </>
  )
}

export default Theator
