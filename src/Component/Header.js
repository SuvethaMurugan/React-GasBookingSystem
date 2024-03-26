import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header">
      <a className="logo">
       BookITEasy
      </a>
      <div className="header-right">
        <a>
          Home
        </a>
        <a href="/register">Register</a>
        <a >Login</a>
        <a >Admin</a>
      </div>
    </div>
  );
};

export default Header;
