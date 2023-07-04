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

  const [showRemovingConfirmation, setShowRemovingConfirmation] = useState(false);

  const toggleRemovingConfirmation = () => {
    setShowRemovingConfirmation(!showRemovingConfirmation);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  let validadeProduto = new Date(props.product.validade.toString());

  return (

    <div className="product-in-list" key={props.product._id} onClick={togglePopup}>

      {user_data && user_data.user_flag === 1 ? (
        <button className="product-in-list-remove-button" onClick={(event) => { event.stopPropagation(); toggleRemovingConfirmation(); }}>
          <span className="button-line"></span>
        </button>
      ) : (
        <></>
      )}

      <div className={`product-in-list__image ${validadeProduto < currentDate ? 'black-and-white-total' : ''}`}>
        {props.product.product_quantity <= 0 && validadeProduto > currentDate && (
          <div className="unavailable-label">Indisponível</div>
        )}
        {props.product.product_quantity > 0 && validadeProduto > currentDate && (
          <div className="available-label">Disponível</div>
        )}
        {validadeProduto < currentDate && (
          <div className="expired-label">Vencido</div>
        )}
        <img src={props.product.product_image} alt="Imagem do Produto 1" />
      </div>

      <div className="product-in-list__info">
        <div className="product-in-list__info__name" >
          <h3 onClick={togglePopup}>{props.product.product_name}</h3>
        </div>
        <div className="product-in-list__info__price">
          <h4>R$ {props.product.product_price}</h4>
        </div>
        <div className="product-in-list__info__validade">
          {validadeProduto < currentDate ? (
            <p>Vencido em: {validadeProduto.toLocaleDateString()}</p>
          ) : (
            <p>Validade: {validadeProduto.toLocaleDateString()}</p>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="product-detail-container">
              <div className="product-detail">
                {props.product.product_quantity <= 0 && validadeProduto > currentDate && (
                  <div className="unavailable-label">Indisponível</div>
                )}
                {props.product.product_quantity > 0 && validadeProduto > currentDate && (
                  <div className="available-label">Disponível</div>
                )}
                {validadeProduto < currentDate && (
                  <div className="expired-label">Vencido</div>
                )}
                <img
                  src={props.product.product_image}
                  alt="Imagem do Produto 1"
                  className={validadeProduto < currentDate ? 'black-and-white-total' : ''}
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
                <div className="product-in-list__info__validade">
                  <p>Validade: {validadeProduto.toLocaleDateString()}</p>
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
    </div>
  );
};

export default ProductInList;