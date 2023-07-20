import React, { useState } from 'react';
import axios from "axios";
import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';
import '../styles/ShoppingList.css';
import QuantityButton from './QuantityButton';
import { removeProduct } from '../services/products';
import { removeProductFromCart, saveProductInCart, getCart, clearCart } from '../services/cart';

const ProductInList = (props) => {
  const handleRemoveProduct = (event) => {
    const productId = props.product._id;
    removeProduct(productId);
    window.location.reload();
  };

  const handleAddProductToCart = (event) => {
    const productToAdd = {
      ...props.product,
      quantity: quantity
    };
    saveProductInCart(productToAdd);
  };

  const handleRemoveProductFromCart = (event) => {
    removeProductFromCart(props.product);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const cart = getCart();

  const [showPopup, setShowPopup] = useState(false);
  const user_data = props.props.props.UserData && typeof props.props.props.UserData === 'object' ? props.props.props.UserData.user : null;
  const currentDate = new Date();

  const [showRemovingConfirmation, setShowRemovingConfirmation] = useState(false);

  const toggleRemovingConfirmation = () => {
    setShowRemovingConfirmation(!showRemovingConfirmation);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };
  const handlePopupContainerClick = (event) => {
    event.stopPropagation();
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
          <h4>R$ {props.product.product_price.toFixed(2)}</h4>
        </div>
        <div className="product-in-list__info__validade">
          {validadeProduto < currentDate ? (
            <p>Vencido em: {validadeProduto.toLocaleDateString('pt-BR')}</p>
          ) : (
            <p>Validade: {validadeProduto.toLocaleDateString('pt-BR')}</p>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup" onClick={handlePopupContainerClick}>
          <div className="popup-content" onClick={handlePopupClick}>
            <div className="product-detail-container">
              <div className="product-detail">
                <button className="popup-close-button" onClick={handleClosePopup}>
                  X
                </button>
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
                {user_data && user_data.user_flag === 0 && (
                  <>
                    {props.product && cart && cart.find(product => product._id == props.product._id) ? (
                      <div className="add-product-conteiner">
                        <button className="product-detail-remove-from-cart-button" onClick={handleRemoveProductFromCart}>Remover do carrinho</button>
                      </div>
                    ) : (
                      <div className="add-product-conteiner">
                        <button className="product-detail-add-to-cart-button" onClick={handleAddProductToCart}>Adicionar</button>
                      </div>
                    )}
                  </>
                )}
                <div className="product-detail-quantity">
                  <p>Quantidade disponível: {props.product.product_quantity}</p>
                  <p>Validade: {validadeProduto.toLocaleDateString('pt-BR')}</p>
                </div>
                <div className="product-detail-price">
                  R$ {props.product.product_price}
                </div>

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
              <button className="removing-confirmation-modal-button" onClick={() => toggleRemovingConfirmation()}>Cancelar</button>
              <button className="removing-confirmation-modal-button" onClick={() => handleRemoveProduct()}>Remover</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInList;