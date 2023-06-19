// TODO - Create a Shopping List page

import React from 'react';
import * as yup from "yup";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/ShoppingList.css';
import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';
import { productList, getProductListData } from '../services/products';
import { useEffect, useState } from 'react';

function ShoppingList() {
  let listabruto;

  const [listaDeProdutos, setlistaDeProdutos] = useState(null);

  async function getShoppingList() {
    try {
      const response = await productList();
      console.log(response);
      listabruto = getProductListData();
      console.log(listabruto);
      setlistaDeProdutos(listabruto);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getShoppingList();
  }, []); // 

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
      setShowPopup(!showPopup);
  };


  // const [resultado, setResultado] = useState(null);

  // useEffect(() => {
  //   const getShoppingList = async () => {
  //     // Realize alguma tarefa assíncrona
  //     try {
  //       const response = await productList();
  //       console.log(response);
  //       listabruto = getProductListData();
  //       console.log(listabruto[0].product_name);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     const resultado = await getShoppingList();

  //     // Atualize o estado com o resultado
  //     setResultado(resultado);
  //   };

  //   getShoppingList();
  // }, []);

  return (
    <div className="container">
      <Sidebar />
      <Header />
      <div className="search-bar">
      </div>
      <div className="shoppin-list-container">
        <div className="product-in-list" onClick={togglePopup}>
          {/* {listaDeProdutos.map((product) => (
            <li key={product._id}>
              <img src={product.product_image} alt={product.product_name} />
              <h3>{product.product_name}</h3>
              <p>{product.product_description}</p>
              <p>Price: ${product.product_price}</p>
              <p>Category: {product.product_category}</p>
              <p>Quantity: {product.product_quantity}</p>
              <p>Valid until: {product.validade}</p>
            </li>
          ))} */}
          

          <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1" />
          {/* <h3>Feijãozinho</h3> */}
          {/* {resultado && <h3>{resultado}</h3>} */}
          <p>Feijãozinho gostosinho</p>
          <p>Preço: R$ 149,99</p>
          <button className="product-in-list-button" onClick={togglePopup}>
              <span className="plus-icon"></span>
          </button>

          {showPopup && (
              <div className="popup">
              <div className="popup-content">
                <div className="product-detail-container">
                    <div className="product-detail">
                        <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1" />
                        <div className="product-detail-title">Feijãozinho</div>
                        <div className="product-detail-text-box">
                            <div className="product-detail-store">Loja tal - Águas Claras</div>
                            <div className="product-detail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum fringilla lectus at rutrum. Quisque maximus metus vitae risus rutrum, ut ullamcorper ipsum aliquam. Nunc ut velit dignissim, consequat mauris ut, tristique purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam semper vestibulum fermentum. Aenean in fermentum enim. Nullam et pharetra ligula. Vivamus eu libero ut felis ullamcorper malesuada. Nullam ullamcorper odio et eleifend tristique.</div>
                            <div className="product-detail-quantity">Quantidade disponível: 5</div>
                        </div>
                        <div className="product-detail-price">R$ 149,99</div>
                        <div className="product-detail-button">Adicionar</div>
                    </div>
                  </div>
                  <button className="product-in-list-button" onClick={togglePopup}></button>
              </div>
              </div>
          )}

          {/* {data.map((product) => (
            <div key={product._id}>
              <h3>{product.product_name}</h3>
              <p>{product.product_description}</p>
              <p>Price: {product.product_price}</p>
            </div>
          ))} */}
      </div>
      </div>
    </div>
  );

}

export default ShoppingList;