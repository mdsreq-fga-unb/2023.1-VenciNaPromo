import React, {useState} from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    return (
        <div class="product-detail-container">
            <div class="product-detail">
                <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1" />
                <h3>Feijãozinho</h3>
                <p>Feijãozinho gostosinho</p>
                <p>Preço: R$ 149,99</p>
            </div>
        </div>
    );
};

export default ProductDetail;