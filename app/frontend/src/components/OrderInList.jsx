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
                    <h1>Pedido #{props.order._id} comprado no dia {(new Date(props.order.createdAt)).toDateString()}</h1>
                </div>
            </div>

            {/* products in order */}
            <div className="order-body">
                {props.order.products.map((product) => {
                    return (
                        <div className="order-product">
                            <div className="order-product-description">
                                <img src={product.product_image} alt={product.name} />
                                <h2>{product.product_name}</h2>
                                <h3>{product.product_description}</h3>
                                <h3>Validade: {(new Date(product.validade)).toDateString()}</h3>
                            </div>

                            <div className="order-product-final">
                                <h2>Quantidade: {(props.order.products.filter((p) => p._id === product._id)).length}</h2>
                                <h2>Preço: R$ {product.product_price}</h2>
                                <h2>Vendedor: {product._vendor_id.name}</h2>
                                <h2>Código: {props.order.code}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderInList;