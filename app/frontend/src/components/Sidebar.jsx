import React from 'react';
import '../styles/Sidebar.css'; // Arquivo de estilos para personalização da sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Conteúdo da sidebar */}
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-button">Comprar</button>
        <button className="sidebar-button">Cupons</button>
        <button className="sidebar-button">Info</button>
      </div>
    </div>
  );
};

export default Sidebar;
