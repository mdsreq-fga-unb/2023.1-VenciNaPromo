import React, {useState} from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    return (
        <div class="product-detail-container">
            <div class="product-detail">
                <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1" />
                <div class="product-detail-title">Feijãozinho</div>
                <div class="product-detail-text-box">
                    <div class="product-detail-store">Loja tal - Águas Claras</div>
                    <div class="product-detail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum fringilla lectus at rutrum. Quisque maximus metus vitae risus rutrum, ut ullamcorper ipsum aliquam. Nunc ut velit dignissim, consequat mauris ut, tristique purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam semper vestibulum fermentum. Aenean in fermentum enim. Nullam et pharetra ligula. Vivamus eu libero ut felis ullamcorper malesuada. Nullam ullamcorper odio et eleifend tristique.</div>
                    <div class="product-detail-quantity">Quantidade disponível: 5</div>
                </div>
                <div class="product-detail-price">R$ 149,99</div>
                <div class="product-detail-button">Adicionar</div>
            </div>
        </div>
    );
};

export default ProductDetail;