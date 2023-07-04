import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-left">
        <span>VenciNaPromo</span>
      </div>
      <div className="header-right">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/">Produtos</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
