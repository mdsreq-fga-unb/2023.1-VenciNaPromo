import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { logout } from "../services/auth";

const Sidebar = () => {
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
          <>
            <button className="logoff-button" onClick={logout}>deslogar</button>
            <button className="sidebar-button">Compras</button>
            <button className="sidebar-button">Cupons</button>
            <button className="info-button">Info</button>
            {/* <button className="collapse-button" onClick={toggleCollapse}>
              Colapsar
            </button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
