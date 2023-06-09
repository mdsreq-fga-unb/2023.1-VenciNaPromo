import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-button">Compras</button>
        <button className="sidebar-button">Cupons</button>
        <button className="info-button">Info</button>
      </div>
    </div>
  );
};

export default Sidebar;
