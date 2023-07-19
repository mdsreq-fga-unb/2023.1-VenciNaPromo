import React, { useState } from 'react';
import '../styles/QuantityButton.css';
import { updateProductQuantityInCart } from '../services/cart';

const QuantityButton = ({ product, quantity, setQuantity, minQuantity, maxQuantity }) => {
    const decreaseQuantity = () => {
        if (quantity > minQuantity) {
            const updatedQuantity = quantity - 1;
            setQuantity(updatedQuantity);
            updateProductQuantityInCart(product._id, updatedQuantity); // Atualize a quantidade do produto no carrinho
        }
    };

    const increaseQuantity = () => {
        if (quantity < maxQuantity) {
            const updatedQuantity = quantity + 1;
            setQuantity(updatedQuantity);
            updateProductQuantityInCart(product._id, updatedQuantity); // Atualize a quantidade do produto no carrinho
        }
    };

    return (
        <div className="quantity-button">
            <button className="minus" onClick={decreaseQuantity}>-</button>
            <span className="number">Qtd: {quantity}</span>
            <button className="plus" onClick={increaseQuantity}>+</button>
        </div>
    );
};


export default QuantityButton;
