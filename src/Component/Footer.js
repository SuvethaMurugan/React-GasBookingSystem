import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='warpper'>
    <footer>
      <p style={{ paddingLeft:'35%'}}>© {new Date().getFullYear()} Company Name</p>
    </footer>
    </div>
  );
};

export default Footer;
