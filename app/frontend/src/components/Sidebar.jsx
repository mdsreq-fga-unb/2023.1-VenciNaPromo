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
  const isLogged = props.token && props.token !== 'null';

  // empty call, just for demonstration
  const doNothing = () => {};

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };



  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {isLogged ? (
          <div className="sidebar-user">
            <div className="sidebar-user-img">
              <img src={props.avatar} alt="avatar" />
            </div>
            <div className="sidebar-user-name">
              {props.username}
            </div>
          </div>
        ) : (
          <button className="login-button" href="/">Entrar</button>
        )}
      </div>
      <div className="sidebar-content" />
      <div className="sidebar-footer">
        <button className={`${isLogged ? 'sidebar' : 'collapse'}-button`} onClick={isLogged ? doNothing : doNothing}>
          Compras
        </button>
        <button className={`${isLogged ? 'sidebar' : 'collapse'}-button`} onClick={isLogged ? doNothing : doNothing}>
          Cupons
        </button>
        <button className="sidebar-button" href="/home">
          Info
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
