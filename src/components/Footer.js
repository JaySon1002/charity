import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div className='footer-container'>
    <div className='footer-topcontainer'>
      <section className='footer-subscription'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="images/cherilives1.png" className='logos' alt=''/>
            </Link>
        </div>
        <p className='footer-subscription-heading'>
          Be an inspiration for changes! A helping hand for a hoping heart.
        </p>
        <h2 className='footer-subscription-text'>
          Subscribe Us
        </h2>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className='subscribe'>
              <img src='images/icon-right.png' className='iconbtn' alt=''/>
            </button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Legal Information</h2>
            <Link to='/sign-up'>Privacy Policy Terms and Conditions</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contacts</Link>
          </div>
        
          <div class='footer-link-items'>
            <h2>Get Involved</h2>
            <Link to='/'>Be a Volunteer</Link>
            <Link to='/'>Send Donations</Link>
            <Link to='/'>Media</Link>
          </div>
        </div>
      </div>
    </div>

    <div className='footer-bottomcontainer'>
      <section class='social-media'>
        <div className='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='bx bxl-facebook-circle' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='bx bxl-instagram-alt'/>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='bx bxl-youtube'/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='bx bxl-twitter'/>
            </Link>
        
          </div>
        </div>
        <hr/>
        <div class='copyright-notice'>
          <small class='website-rights'>copyright 2023 © | All rights reserved</small>
        </div>
      </section>
    </div>
  </div>
  );
}

export default Footer;