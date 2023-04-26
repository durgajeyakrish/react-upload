import React from 'react'
import "./Footer.css"
import logo from '../assets/image/bookmyshowlogo.png'
const Footer=()=>{
    return (
        <div className='main'>
            <div className='main1'>
            <div className='footer'>
                <div className='line'>
                <hr></hr>
                </div>
                <div className='centerimg'>
                    <img src={logo}/>
                </div>
                <div className='line'>
                    <hr></hr>
                </div>
            </div>
            </div>
            <div className='icon'>
                <div className='icon1'>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className='icon1'>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className='icon1'>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className='icon1'>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <div className='icon1'>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
export default Footer
