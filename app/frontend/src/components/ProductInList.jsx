import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';

import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';

const ProductInList = (product) => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="product-in-list" onClick={togglePopup}>
            <div className="product-in-list__image">
                <img src={product.product_image} alt="Imagem do Produto 1" />
            </div>
            <div className="product-in-list__info">
                <div className="product-in-list__info__name">
                    <h3>Product Name</h3>
                </div>
                <div className="product-in-list__info__price">
                    <h3>R$ 0,00</h3>
                </div>
                <button className="product-in-list-button" onClick={togglePopup}>
                    <span className="plus-icon"></span>
                </button>
            </div>
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
        </div>
    );
};

export default ProductInList;