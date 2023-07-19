import React, { useState } from 'react';
import '../styles/Checkout.css';

import { getCart, getOrders, getOrdersData } from '../services/cart';
import OrderInList from '../components/OrderInList';
import { logout } from '../services/auth';

const Checkout = (props) => {
    const [listaDePedidos, setlistaDePedidos] = useState([]);

    async function getCheckoutList() {
        await getOrders();
        const listabruto = getOrdersData();
        if (listabruto) {
            setlistaDePedidos(listabruto);
        }
        else {
            alert("Erro ao carregar lista de pedidos!");
        }
      }

    useState(() => {
        getCheckoutList();
    }, []);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="checkout-header-title">
                    <h1>Produtos Comprados</h1>
                </div>
            </div>

            <div className="checkout-body">
                {/* if user flag 0, then show his cart orders */}
                {props.props.UserData && listaDePedidos ? (
                    listaDePedidos.map((order) => {
                        return (
                            <OrderInList order={order} />
                        );
                    })
                ) : (
                    //loading
                    <div className="checkout-loading">
                        <h1>Carregando...</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;