import React, { useEffect } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';

var counter = 1;
  function HeroSection() {
    useEffect(() => {
    const interval = setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1; 
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div className='hero-container'>
      <div className='left-container'>
        {/* <video src='/video/video-1.mp4' autoPlay loop muted /> */}
          <h1>Your Donation, Their Transformation</h1>
        <p>A Helping Hand For A Hoping Heart</p>
        <div className='hero-btns'>
          <Link to='/about-us'>
            <button className='btns'>   
              Learn More
            </button>
          </Link>
        </div>
      </div>

        <div className='right-container'>
          <div className='slider'>
            <div className='slides'>

              <input type='radio' name='radio-btn' id='radio1'/>
              <input type='radio' name='radio-btn' id='radio2'/>
              <input type='radio' name='radio-btn' id='radio3'/>

              <div className='slide first'>
                <img src='/images/img-1.jpg' alt=''/>
              </div>
              <div className='slide'>
                <img src='/images/img-2.jpg' alt=''/>
              </div>
              <div className='slide'>
                <img src='/images/img-3.jpg' alt=''/>
              </div>

              <div className='navigation-auto'>
                <div className='auto-btn1'></div>
                <div className='auto-btn2'></div>
                <div className='auto-btn3'></div>
              </div>

            </div>
              <div className='navigation-manual'>
                <label for='radio1' className='manual-btn'></label> 
                <label for='radio2' className='manual-btn'></label> 
                <label for='radio3' className='manual-btn'></label> 
              </div>

          </div>
        </div>

    </div>


    
  );
}


export default HeroSection;