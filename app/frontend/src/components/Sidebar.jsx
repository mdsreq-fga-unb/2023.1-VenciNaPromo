import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { Component } from "../services/auth";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isLoggedIn, login, logout } = Component();

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
          <div>
          { isLoggedIn ? (
            <>
            <button className="sidebar-button" onClick={logout}>Encerrar Sessão</button>
            <button className="sidebar-button">Compras</button>
            <button className="sidebar-button">Cupons</button>
            {/* <button className="collapse-button" onClick={toggleCollapse}>
              Colapsar
            </button> */}
            </>
          ) : (
            <button className="sidebar-button" onClick={login}>Iniciar Sessão</button>
          )}
        </div>    
        )}
      </div>
    </div>
  );
};

export default Sidebar;
