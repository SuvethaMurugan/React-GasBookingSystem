import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='warpper'>
    <footer>
      <p>© {new Date().getFullYear()} Company Name</p>
    </footer>
    </div>
  );
};

export default Footer;
