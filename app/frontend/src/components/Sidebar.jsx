import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { logout } from "../services/auth";
import Carrinho from '../img/carrinho-de-compras.png';
import QuantityButton from './QuantityButton';
import Lixeira from '../img/lixeira.png';
import Menu from '../img/menu.png';
import { getCart, removeProductFromCart } from '../services/cart';
import { clearCart, checkout, getCheckoutTotal } from '../services/cart';


const Sidebar = (props) => {
  const user_data = props.props.UserData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  let checkoutTotal;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setMenuOpen(!menuOpen);
  };

  const handleCheckout = async (cart) => {
    await checkout(cart)
    checkoutTotal = getCheckoutTotal();
    if (checkoutTotal) {
      console.log(checkoutTotal);
      alert(`Compra realizada ! seu código: ${checkoutTotal.order.code}`);
      clearCart();
      window.location.reload();
    } else {
      alert("Erro ao realizar compra!");
    }
  };

  const cart = getCart();

  //remove duplicates to show to user
  const cleanCart = cart ? cart.filter((product, index, self) =>
    index === self.findIndex((p) => (
      p._id === product._id
    ))
  ) : [];
  

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const doNothing = () => { };

  return (
    <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
      {user_data ? (
        <div className="sidebar-container">
          <div className="sidebar-header">
            <img src={Menu} alt="menu" className={`menu-icon ${menuOpen ? "menu-icon-open" : ""}`} onClick={toggleSidebar} />
            <div className="sidebar-user">
              {/* <div className="sidebar-user-img">
            <img src={Carrinho} alt="carrinho" /> 
            </div> */}
              <div className="sidebar-user-name">
                {user_data.user.name}
              </div>
              {/* <div className="sidebar-user-name">
              {"Email: "}{user_data.user.email}
            </div>
            <div className="sidebar-user-name">
              {"Tipo de usuario: "}{user_data.user.user_flag}
            </div> */}
            </div>
          </div>
          <div className="sidebar-body">
            <div className="sidebar-cart">
              {user_data.user.user_flag === 0 && (
                <div className="sidebar-cart-container">
                  {cart && cart.length > 0 ? (
                    <>
                      <div className="sidebar-cart-products">
                        {cleanCart.map((product) => (
                          <div className="sidebar-cart-product" key={product._id}>
                            <div className="sidebar-cart-product-name">
                              {product.product_name}
                            </div>
                            <div className="sidebar-cart-product-price">
                              Preço: R$ {product.product_price.toFixed(2)}
                            </div>
                            <div className="sidebar-cart-product-remove-from-cart">
                              <button className="sidebar-cart-product-remove-from-cart-button" onClick={() => removeProductFromCart(product)}>
                                <img className="sidebar-cart-product-remove-from-cart-img" src={Lixeira} alt="Ícone" />
                              </button>
                              <QuantityButton
                                product={product}
                                //compare quantity of duplicates, it is the quantity of the product in the cart
                                quantity={cart.filter((p) => p._id === product._id).length}
                                minQuantity={1}
                                maxQuantity={product.product_quantity}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="sidebar-cart-total">
                        <div className="sidebar-cart-total-text">
                          Total:
                        </div>
                        <div className="sidebar-cart-total-price">
                          R$ {cart.reduce((total, product) => total + product.product_price, 0).toFixed(2)}
                        </div>
                      </div>
                      <div className="sidebar-cart-checkout">
                        <button className="sidebar-cart-checkout-button" onClick={() => handleCheckout(cart)}>
                          Finalizar compra
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="sidebar-cart-empty">
                      <div className="sidebar-cart-empty-text">
                        Carrinho vazio
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="sidebar-footer">
            <div className="sidebar-footer-container">
              <button className="sidebar-button" onClick={user_data ? () => window.location.href = '/checkout' : doNothing}> Compras </button>
              <button className="sidebar-button" onClick={() => logout()}><span> Sair </span> </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-footer">
          <div className="sidebar-footer-container">
            <button className="sidebar-button" onClick={() => logout()}><span> Sair </span> </button>
            <button className="sidebar-button" onClick={user_data ? () => window.location.href='/checkout' : doNothing}> Histórico </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;