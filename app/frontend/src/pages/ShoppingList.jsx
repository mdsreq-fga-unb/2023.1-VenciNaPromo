// TODO - Create a Shopping List page

import React from 'react';
import * as yup from "yup";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductInList from '../components/ProductInList';
import '../styles/ShoppingList.css';
import { productList } from '../services/products';
import { useEffect } from 'react';

function ShoppingList() {

  async function getShoppingList() {
    try {
      const response = await productList();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  } 

  useEffect(() => {
    getShoppingList();
  }, []);

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