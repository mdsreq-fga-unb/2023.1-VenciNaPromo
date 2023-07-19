import React, { useState } from 'react';
import '../styles/OrderInList.css';

const OrderInList = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    
    return (
        <div className="order-in-list" key={props.order._id} onClick={togglePopup}>
        <div className="order-in-list__image">
            <img src={props.order.product_image} alt="product" />
        </div>
        <div className="order-in-list__info">
            <div className="order-in-list__info__name">
            <h1>{props.order.product_name}</h1>
            </div>
            <div className="order-in-list__info__price">
            <h2>R$ {props.order.product_price}</h2>
            </div>
        </div>
        <div className="order-in-list__quantity">
            <h2>{props.order.product_quantity}</h2>
        </div>
        <div className="order-in-list__total">
            <h2>R$ {props.order.product_price * props.order.product_quantity}</h2>
        </div>
        </div>
    );
};

export default OrderInList;