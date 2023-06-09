// TODO - Create a Shopping List page

import React from 'react';
import * as yup from "yup";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/ShoppingList.css';

function ShoppingList() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <div className="search-bar">
      </div>
      <div className="shoppin-list-container">
        <div class="product-in-list">
          <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1"/>
          <h3>Feijãozinho</h3>
          <p>Feijãozinho gostosinho</p>
          <p>Preço: R$ 149,99</p>
        </div>

        <div class="product-in-list">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfwIfr4_vhQWGMCS4gew3-IdWHb41s3UvXNh7bgHODmR_Cv3U3QRqdDUfENK1i4-Y1c&usqp=CAU" alt="Imagem do Produto 2"/>
          <h3>Arrozinho</h3>
          <p>Arrozinho gostosinho</p>
          <p>Preço: R$ 199,99</p>
        </div>

        <div class="product-in-list">
          <img src="https://segredosdacomida.com.br/wp-content/uploads/2022/08/como-fazer-pipoca-com-agua.jpg" alt="Imagem do Produto 3"/>
          <h3>Pipoquinha</h3>
          <p>Pipoquinha gostosinha</p>
          <p>Preço: R$ 3,99</p>
        </div>

        <div class="product-in-list">
          <img src="https://achougastronomia.com.br/wp-content/uploads/2022/01/Receita-de-macarrao-alho-e-oleo-500x500.png" alt="Imagem do Produto 4"/>
          <h3>Macarrãozinho</h3>
          <p>Macarrãozinho top</p>
          <p>Preço: R$ 48,99</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;