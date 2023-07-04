import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { logout } from "../services/auth";
import Carrinho from '../img/carrinho-de-compras.png';
import Menu from '../img/menu.png';


const Sidebar = (props) => {
  const user_data = props.props.UserData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setMenuOpen(!menuOpen);
  };

  const doNothing = () => {};

  return (
    <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
      {user_data ? (
      <div>
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
        <div className="sidebar-footer">
          <div className="sidebar-footer-container">
            <button className="sidebar-button" onClick={() => logout()}><span> Sair </span> </button>
            <button className="sidebar-button" onClick={user_data ? () => window.location.href='/' : doNothing}> Compras </button>
            <button className="sidebar-button" onClick={user_data ? () => window.location.href='/' : doNothing}> Cupons </button>
          </div>
        </div>
      </div>
        ) : (
          <div className="sidebar-footer">
            <div className="sidebar-footer-container">
              <button className="sidebar-button" onClick={() => window.location.href='/'}>Entrar</button> 
            </div>
          </div>
        )}
      </div>
  );
};

export default Sidebar;
