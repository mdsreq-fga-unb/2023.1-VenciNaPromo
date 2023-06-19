import React, { useState } from 'react';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { login, register } from "../services/auth";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/Home.css';
import { logout } from "../services/auth";

function Home() {


  return (
    <div className="container">
      <div className="home-container">
        <div className='image-container'>
          <img src="https://i.imgur.com/3Z1Qq4P.png" alt="logo" />
        </div>
        <div className="home-content">
          <div className="home-text">
            <p>Texto resumo falando sobre o projeto e explicando o problema e a causa.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sodales justo.</p>
          </div>
          <div className="home-info">
            <button className="app-button" onClick={() => window.location.href='/'}>Ir para a aplicação</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
