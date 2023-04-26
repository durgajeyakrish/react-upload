import React from 'react'
import '../Header/Header.css'
import logo from '../assets/image/bookmyshowlogo.png';

const Header = () => {
 
  return (
    <div>
      <div className='header'>
         <div className='container'>
            <div className='topnav'>
                <div className='logoimg'>
                    <div className='img'>
                      <img src={logo} />
                    </div>
                    <div className='logoinp'> 
                      <input type="text" placeholder='Search for Movies,Events,Plays,Sports and Activities'/>
                    </div>
                </div>
                <div className='but'>
                    <a href="">sign in</a>
                </div>
            </div>
      </div>
      </div>
      <div className='header-2'> 
      <div className='container'>
          <div className='navbar'>
            <a>Movies</a>
            <a>Events</a>
            <a>Plays</a>
            <a>Sports</a>
            <a>Activites</a>
            <a>Buzz</a>
          </div>
        </div>           
    </div>   
    <div className='banner'>
      <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1675080138999_web.jpg' width='100%'/>
    </div>
    </div>
  )
}

export default Header;

