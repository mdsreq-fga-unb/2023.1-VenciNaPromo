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

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    console.log(props);

    return (
      <div className="product-in-list" onClick={togglePopup}>
        {user_data && user_data.user_flag === 0 ? (
          <button className="product-in-list-button" onClick={() => handleRemoveProduct()}>
            X
          </button>
        ) : (
          <></>
        )}
        <div className="product-in-list__image">
          <img src={props.product.product_image} alt="Imagem do Produto 1" />
        </div>
        <div className="product-in-list__info">
          <div className="product-in-list__info__name">
            <h3>{props.product.product_name}</h3>
          </div>
          <div className="product-in-list__info__price">
            <h3>{props.product.product_price}</h3>
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
                  />
                  <div className="product-detail-title">
                    {props.product.product_name}
                  </div>
                  <div className="product-detail-text-box">
                    <div className="product-detail-store">
                      Empório Jardim Botânico
                    </div>
                    <div className="product-detail-description">
                      {props.product.product_description}
                    </div>
                    <div className="product-detail-quantity">
                      Quantidade disponível: {props.product.product_quantity}
                    </div>
                  </div>
                  <div className="product-detail-price">
                    R$ {props.product.product_price}
                  </div>
                  {/* <div className="product-detail-button">Adicionar</div> */}
                </div>
              </div>
              <button
                className="product-in-list-button"
                onClick={togglePopup}
              ></button>
            </div>
          </div>
        )}
      </div>
    );
};

export default ProductInList;