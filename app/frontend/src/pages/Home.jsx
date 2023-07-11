import React from 'react';
import '../styles/Home.css';
import desperdicio from '../img/desperdicio.jpg';

function Home() {

  return (
    <div className="container">
      <div className="home-container">
        <div className='image-container'>
          <img src={desperdicio} alt="desperdício de alimentos" />
        </div>
        <div className="home-content">
          <div className="home-text">
            <p> Bem-vindo ao nosso site dedicado a combater o desperdício de alimentos! 
              Aqui, acreditamos que pequenas ações podem gerar grandes impactos. 
              Nosso objetivo é incentivar você a repensar sua relação com os produtos de mercado próximos ao vencimento. 
              Sabemos que muitos alimentos perfeitamente consumíveis acabam sendo descartados devido a datas de validade iminentes. </p> 
            
            <p> Mas por que desperdiçar quando podemos aproveitar? Nossa plataforma conecta consumidores conscientes com produtos frescos e deliciosos, oferecendo descontos especiais. Junte-se a nós nessa missão de valorizar o alimento e preservar o planeta. 
              Juntos, podemos mudar a forma como enxergamos o vencimento e criar um futuro mais sustentável. 
              Faça parte dessa revolução, faça parte do nosso movimento contra o desperdício! </p>
          </div>
          <div className="home-info">
            <button className="app-button" onClick={() => window.location.href='/'}>Incentivar a economia sustentável</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;