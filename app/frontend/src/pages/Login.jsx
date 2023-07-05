import React, { useState } from 'react';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { login, register } from "../services/auth";
import Header from '../components/Header';
import '../styles/Login.css';

function Login({ setIsVisitor }) {
  const handleLogin = async (values, { resetForm }) => {
    try {
      const { email, password } = values;
      const userData = {
        email,
        password,
      };
      await login(userData).then((response) => {
        localStorage.setItem("token", response.token);
        window.location.reload();
      });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleRegister = async (values, { resetForm }) => {
    try {
      const { username, flag, email, password, confirmation } = values;
      const userData = {
        username,
        flag: parseInt(flag),
        email,
        password,
      };
      const response = await register(userData);
      resetForm();
    } catch (error) {
      console.error(error); 
    }
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    username: yup
      .string()
      .required("O nome é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
    flag: yup
      .number()
  });

  return (
    <div className="container">
      <h1>Bem Vindo ao Nosso Aplicativo!</h1>
      <h2>Evite o Desperdício e Crie sua Conta.</h2>
      <div className="login-container">
        <div className="form-container">
          <div className="register-form-container">
            <h3>Crie Sua Conta</h3>
            <Formik
              initialValues={{username: "", email: "", password: "", flag: "", confirmation: "" }}
              onSubmit={handleRegister}
              validationSchema={validationsRegister}
            >
              <Form className="register-form">
                <div className="form-group">
                  <Field
                    as="select"
                    name="flag"
                    className="form-field"
                  >
                    <option value="">Cliente ou Vendedor?</option>
                    <option value={0}>Cliente</option>
                    <option value={1}>Vendedor</option>
                  </Field>
                </div>
                
                <div className="form-group">
                  <Field name="username" className="form-field" placeholder="Nome" />
                  <ErrorMessage
                    component="span"
                    name="username"
                    className="form-error"
                  />
                </div>
                <div className="register-form-group">
                  <Field name="email" className="form-field" placeholder="Email" />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                  />
                </div>

                <div className="form-group">
                  <Field name="password" type="password" className="form-field" placeholder="Senha" />
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error-password"
                  />
                </div>

                <div className="form-group">
                  <Field
                    name="confirmation"
                    type="password"
                    className="form-field"
                    placeholder="Confirmação de Senha"
                  />
                  <ErrorMessage
                    component="span"
                    name="confirmation"
                    className="form-error-password"
                  />
                </div>

                <button className="button-register" type="submit">
                  Cadastrar
                </button>
              </Form>
            </Formik>
          </div>
          <div className="form-divider"></div>

          <div className="login-form-container">
            <h3>Já é Cadastrado?</h3>
            <Formik
              initialValues={{email: "", password: ""}}
              onSubmit={handleLogin}
              validationSchema={validationsLogin}
            >
              <Form className="login-form">
                <div className="form-group">
                  <Field
                    as="select"
                    name="flag"
                    className="form-field"
                  >
                    <option value="">Cliente ou Vendedor?</option>
                    <option value="opcao1">Cliente</option>
                    <option value="opcao2">Vendedor</option>
                  </Field>
                </div>
                
                <div className="login-form-group">
                  <Field name="email" className="form-field" placeholder="Email" />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                  />
                </div>

                <div className="form-group">
                  <Field name="password" type="password" className="form-field" placeholder="Senha" />
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error-password"
                  />
                </div>

                <button className="button-login" type="submit">
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <button className="button-visit" type="submit" onClick={() => setIsVisitor(true)}>
        Continuar como visitante
      </button>
    </div>
  );
}

export default Login;
