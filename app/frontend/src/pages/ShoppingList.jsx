// TODO - Create a Shopping List page

import React from 'react';
import * as yup from "yup";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductInList from '../components/ProductInList';
import '../styles/ShoppingList.css';

function ShoppingList() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <div className="search-bar">
      </div>
      <div className="shoppin-list-container">
        <ProductInList />
        <ProductInList />
        <ProductInList />
        <ProductInList />
        <ProductInList />
        <ProductInList />
      </div>
    </div>
  );
}

export default ShoppingList;