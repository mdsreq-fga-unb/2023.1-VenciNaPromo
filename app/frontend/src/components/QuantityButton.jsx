import React, { useState } from 'react';
import '../styles/QuantityButton.css';
import {removeProductFromCart, saveProductInCart, removeOneProductFromCart} from '../services/cart';

const QuantityButton = ({ product, quantity, minQuantity, maxQuantity }) => {
    const decreaseQuantity = () => {
        removeOneProductFromCart(product);
    };

    const increaseQuantity = () => {
        saveProductInCart(product);
    };

    return (
        <div className="quantity-button">
            <button className="minus" onClick={() => decreaseQuantity()}>-</button>
            <span className="number">{quantity}</span>
            <button className="plus" onClick={() => increaseQuantity()}>+</button>
        </div>
    );
};


export default QuantityButton;
