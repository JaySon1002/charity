import React from 'react';
import './Homecards.css';

function Homecards() {
  return (
    <>
    
    <div className='homecards-container'>
      <div className='homecard-up'>
        <div className='design-1'>
          <img src='/images/homecards-bg.png' alt=''></img>
        </div>
        <div className='design-2'>
          <img src='/images/homecards-bg.png' alt=''></img>
        </div>
        <div className='homecards-text'>
            <p>How can you help?</p>
            <h2>See Below</h2>
        </div>
        <div className='homecards'>
            <div className='homecards-box'>
                <h2>Media</h2>
                <img src='/images/megaphone-icon.png' alt=''></img>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            </div>
            <div className='homecards-box'>
                <h2>Become a Volunteer</h2>
                <img src='/images/volunteer-icon.png' alt=''></img>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            </div>
            <div className='homecards-box'>
                <h2>Send Donation</h2>
                <img src='/images/donations-icon.png' alt=''></img>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
      </div>

      <div className='vid-container'>
        <video src='/video/video-1.mp4' autoPlay loop muted />
      </div>
    </div>

    
    
    </>
  )
}

export default Homecards