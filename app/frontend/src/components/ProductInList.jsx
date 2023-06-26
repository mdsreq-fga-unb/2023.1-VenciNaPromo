import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import axios from "axios";
import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';
import '../styles/ShoppingList.css';
import { productList } from '../services/products';
import { removeProduct } from '../services/products';

const ProductInList = (props) => {
  const handleRemoveProduct = (event) => {
    const productId = props.product._id;
    removeProduct(productId);
    window.location.reload();
  };

    const [showPopup, setShowPopup] = useState(false);
    const user_data = props.props.props.UserData.user;
    const currentDate = new Date(); 

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const validadeProduto = new Date(props.product.validade.toString());

    return (
      
      <div className={`product-in-list ${validadeProduto < currentDate ? 'black-and-white-total' : ''}`} key={props.product._id}>
        
        {user_data && user_data.user_flag === 1 ? (
          <button className="product-in-list-remove-button" onClick={() => handleRemoveProduct()}>
            <span className="button-line"></span>
          </button>
        ) : (
          <></>
        )}

        <div className={`product-in-list__image ${props.product.product_quantity <= 0 ? 'black-and-white' : ''}`}>
          <img src={props.product.product_image} alt="Imagem do Produto 1" />
        </div>

        <div className="product-in-list__info">
          <div className="product-in-list__info__name">
            <h3 onClick={togglePopup}>{props.product.product_name}</h3>
          </div>
          <div className="product-in-list__info__price">
            <h4>R$ {props.product.product_price}</h4>
          </div>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div className="product-detail-container">
                <div className="product-detail">
                  <img 
                    src={props.product.product_image}
                    alt="Imagem do Produto 1"
                    className={props.product.product_quantity <= 0 ? 'black-and-white' : ''}
                  />
                  <div className="product-detail-title">
                    {props.product.product_name}
                  </div>
                  <div className="product-detail-store">
                    Empório Jardim Botânico
                  </div>
                  <div className="product-detail-description">
                    {props.product.product_description}
                  </div>
                  <div className="product-detail-quantity">
                    Quantidade disponível: {props.product.product_quantity}
                  </div>
                  <div className="product-detail-price">
                    R$ {props.product.product_price}
                  </div>
                  <button
                    className="popup-close-button"
                    onClick={togglePopup}
                  >X</button>
                  {/* <div className="product-detail-button">Adicionar</div> */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Código para confirmar a remoção de produto
        
        const [showRemovingConfirmation, setshowRemovingConfirmation] = useState(false);

        const toggleRemovingConfirmation = () => {
          setShowRemovingConfirmation(!showRemovingConfirmation);
        };

        <button className="product-in-list-remove-button" onClick={toggle}>
          <span className="button-line"></span>
        </button>


        {showRemovingConfirmation && (
          <div className="removing-confirmation-modal">
            <div className="removing-confirmation-modal-content">
              <h2>Remover o produto do seu mercado?</h2>
              <div className="removing-confirmation-modal-buttons">
                <button className="removing-confirmation-modal-button" onClick={toggleRemovingConfirmation}>Cancelar</button>
                <button className="removing-confirmation-modal-button" onClick={() => handleRemoveProduct()}>Remover</button>
              </div>
            </div>
          </div>
        )} 
        */}
      </div>
    );
};

export default ProductInList;