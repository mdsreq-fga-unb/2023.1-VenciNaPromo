import React, { useState } from 'react';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { login, register } from "../services/auth";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/Login.css';

function Home() {


  return (
    <div className="home-container">
      <Sidebar />
      <Header />

      <div className='image-container'>
        <img src="https://i.imgur.com/3Z1Qq4P.png" alt="logo" />
      </div>
      <div className="home-content">
        <div className="home-text">
          <h1>Encontre as melhores promoções da sua cidade!</h1>
          <p>Com o Venci na Promo você pode encontrar as melhores promoções da sua cidade, e ainda ganhar cupons para trocar por produtos!</p>
        </div>
        <div className="home-buttons">
          <button className="home-button">Quero me cadastrar</button>
        </div>
        <div className="home-info">
          <h2>Como funciona?</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
