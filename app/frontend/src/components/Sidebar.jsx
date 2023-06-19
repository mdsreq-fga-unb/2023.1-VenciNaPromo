import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { logout } from "../services/auth";

const botao = (token) => {
  if (!token || token === 'null')  {
    return (
    <>
    <button className="sidebar-button" onClick={logout}>Iniciar Sessão</button>
    </>
    );
     
  } else {
    return (
      <>
        <button className="siderbar-button" onClick={logout}>Encerrar Sessão</button>
      {/*<button className="sidebar-button">Compras</button>
        <button className="sidebar-button">Cupons</button> */}
      </>
    );
  }
};

const Sidebar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };



  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content" />
      <div className="sidebar-footer">
        {isCollapsed ? (
          <button className="menu-icon" onClick={toggleCollapse}>
            <i className="fas fa-bars" />
          </button>
        ) : (
          botao(props.token) 
        )}
      </div>
    </div>
  );
};

export default Sidebar;
