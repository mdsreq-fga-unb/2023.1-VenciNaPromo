// TODO - Create a Shopping List page

import React from 'react';
import * as yup from "yup";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/ShoppingList.css';
import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';
import { productList, getProductListData } from '../services/products';
import { useEffect, useState } from 'react';
import ProductInList from '../components/ProductInList';

function ShoppingList() {
  let listabruto;

  const [listaDeProdutos, setlistaDeProdutos] = useState(null);

  async function getShoppingList() {
    try {
      await productList();
      listabruto = getProductListData();
      setlistaDeProdutos(listabruto);
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
        {listaDeProdutos && listaDeProdutos.map((product) => (
          <ProductInList product={product} />
        ))}
      </div>
    </div>
  );

}

export default ShoppingList;