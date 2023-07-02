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
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = listaDeProdutos
    ? listaDeProdutos.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="shoppin-list-container">
        {props.props.UserData && props.props.UserData.user.user_flag === 1 ? (
          filteredProducts.map((product) => (
            <ProductInList product={product} props={props} />
          ))  
        ) : (
          filteredProducts
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