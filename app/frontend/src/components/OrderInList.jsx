import React, { useState } from 'react';
import '../styles/OrderInList.css';

const OrderInList = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    
    useState(() => {
        console.log(props.order);
    }, []);

    
    // makes list of orders with list of products of each order
    return (
        <div className="order-container">
            <div className="order-header">
                <div className="order-header-title">
                    <h1>Pedido #{props.order._id}</h1>
                </div>
                <div className="order-header-date">
                    <h1>{(new Date(props.order.createdAt)).toDateString()}</h1>
                </div>
                <div className="order-header-price">
                    <h1>R$ {props.order.products.reduce((total, product) => {return total + product.product_price;}, 0)}</h1>
                </div>
            </div>

            <div className="order-body">
                <div className="order-body-products">
                    {props.order.products.map((product) => {
                        return (
                            <div className="order-product">
                                <div className="order-product-image">
                                    <img src={product.product_image} alt="product" />
                                </div>
                                <div className="order-product-name">
                                    <h1>{product.product_name}</h1>
                                </div>
                                <div className="order-product-price">
                                    <h1>R$ {product.product_price}</h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OrderInList;