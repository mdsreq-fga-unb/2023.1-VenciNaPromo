import React, { useState } from 'react';
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
        <div>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
        </div>
    );
};


export default QuantityButton;
