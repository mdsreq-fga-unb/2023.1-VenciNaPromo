import React, { useState } from 'react';
import '../styles/OrderInList.css';

const OrderInList = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    
    useState(() => {
        console.log(props.order);
    }, []);

    //remove duplicate products and then reverse the list
    const product_list = props.order.products.filter((product, index, self) =>
        index === self.findIndex((p) => (
            p._id === product._id
        ))
    );

    
    // makes list of orders with list of products of each order
    return (
        <div className="order-container">

            <div className="order-header">
                <div className="order-header-title">
                    <h3>Pedido #{props.order._id} comprado no dia {(new Date(props.order.createdAt)).toLocaleDateString('pt-BR')}</h3>
                </div>
            </div>

            {/* products in order */}
            <div className="order-body">
                {product_list.map((product) => {
                    return (
                        <div className="order-product">
                            <div className="order-product-description">
                                <img src={product.product_image} alt={product.name} />
                                <div className="order-product-description-info">
                                    <h3>{product.product_name}</h3>
                                    {/*description with max char filter*/}
                                    <h3>{product.product_description.length > 50 ? product.product_description.substring(0, 50) + "..." : product.product_description}</h3>
                                    <h3>Validade: {(new Date(product.validade)).toLocaleDateString('pt-BR')}</h3>
                                </div>
                            </div>

                            <div className="order-product-final">
                                <h3>Quantidade: {(props.order.products.filter((p) => p._id === product._id)).length}</h3>
                                <h3>Preço: R$ {product.product_price}</h3>
                                <h3>Vendedor: {product._vendor_id.name}</h3>
                                <h3>Código: {props.order.code}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderInList;