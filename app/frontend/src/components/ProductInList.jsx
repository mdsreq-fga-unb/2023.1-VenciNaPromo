import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';

import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';

const ProductInList = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div class="product-in-list" onClick={togglePopup}>
            <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1" />
            <h3>Feijãozinho</h3>
            <p>Feijãozinho gostosinho</p>
            <p>Preço: R$ 149,99</p>
            <button className="product-in-list-button" onClick={togglePopup}>
                <span className="plus-icon"></span>
            </button>

            {showPopup && (
                <div className="popup">
                <div className="popup-content">
                    <ProductDetail />                    
                    <button className="product-in-list-button" onClick={togglePopup}></button>
                </div>
                </div>
            )}
        </div>
    );
};

export default ProductInList;