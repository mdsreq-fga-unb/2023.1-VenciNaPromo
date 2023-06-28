import React from 'react';
import '../styles/Home.css';

function Home() {


  return (
    <div className="container">
      <div className="home-container">
        <div className='image-container'>
          <img src="https://i.imgur.com/3Z1Qq4P.png" alt="logo" />
        </div>
        <div className="home-content">
          <div className="home-text">
            <p>Texto resumo falando sobre o projeto e explicando o problema e a causa.</p>
          </div>
          <div className="home-info">
            <button className="app-button" onClick={() => window.location.href='/'}>Ir para a aplicação</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
