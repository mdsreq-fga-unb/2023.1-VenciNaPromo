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

function ShoppingList(props) {
  let listabruto;
  let validadeProduto;
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
      <div className="search-bar">
      </div>
      <div className="shoppin-list-container">
        {props.props.UserData && props.props.UserData.user.user_flag === 1 ? (
          listaDeProdutos && listaDeProdutos.map((product) => (
            <ProductInList product={product} props={props} />
          ))  
        ) : (
          listaDeProdutos && listaDeProdutos
          .filter((product) => product.product_quantity > 0)
          .map((product) => {
            validadeProduto = new Date(product.validade.toString());
            if (validadeProduto < new Date()) {
              return null;
            }
            return <ProductInList product={product} props={props} />;
          })
        )}
      </div>
    </div>
  );

}

export default ShoppingList;