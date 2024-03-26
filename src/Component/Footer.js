import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='warpper'>
    <footer style={{ position: 'fixed', bottom: 0, width: '100%',backgroundColor: '#9B4444',
    color: '#333',textAlign: 'center'}}>
      <p>© {new Date().getFullYear()} Company Name</p>
    </footer>
    </div>
  );
};

export default Footer;
