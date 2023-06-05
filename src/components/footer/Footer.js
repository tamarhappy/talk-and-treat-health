import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="social_media">
            <i className="fab fa-facebook-f"></i>

            <i className="fab fa-twitter"></i>

            <i className="fab fa-instagram"></i>
        </div>
        <small>Copyright © Talk and Treat. All rights reserved</small>
    </div>
  )
};

export default Footer;