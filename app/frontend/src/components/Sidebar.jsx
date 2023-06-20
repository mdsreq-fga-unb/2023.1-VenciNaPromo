import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { logout } from "../services/auth";


const Sidebar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const user_data = props.props.UserData;

  const doNothing = () => {};


  return (
    
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {user_data ? (
          <div className="sidebar-user">
            <div className="sidebar-user-img">
              <img src={props.avatar} alt="avatar" />
            </div>
            <div className="sidebar-user-name">
              {"Nome: "}{user_data.user.name}
            </div>
            <div className="sidebar-user-name">
              {"Email: "}{user_data.user.email}
            </div>
            <div className="sidebar-user-name">
              {"Nome: "}{user_data.user.name}
            </div>
            <div className="sidebar-user-name">
              {"Tipo de usuario: "}{user_data.user.user_flag}
            </div>
            <div className="sidebar-footer">
            <button className="sidebar-button" onClick={() => logout()}>
              Sair
            </button>
           {/* <button className={`${user_data ? 'sidebar' : 'collapse'}-button`} onClick={user_data ? () => window.location.href='/' : doNothing}>
          Compras
            </button>
            <button className={`${user_data ? 'sidebar' : 'collapse'}-button`} onClick={user_data ? () => window.location.href='/' : doNothing}>
            Cupons
            </button> */}
            </div>
            
          </div>
        ) : (
          <div className="sidebar-footer">
            <button className="sidebar-button" onClick={() => window.location.href='/'}>Entrar</button>
          </div>
        )}
      </div>
      <div className="sidebar-content" />
    </div>
  );
};

export default Sidebar;
