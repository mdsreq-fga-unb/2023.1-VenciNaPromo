import React from 'react';
import '../styles/Header.css';

function Header() {

  return (
    <div className="header">
      <div className="header-left">
        <span>VenciNaPromo</span>
      </div>
      <div className="header-right">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/">Mercado</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
