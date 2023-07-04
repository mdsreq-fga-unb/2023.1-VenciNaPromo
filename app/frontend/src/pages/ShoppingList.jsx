// TODO - Create a Shopping List page

import React from 'react';
import Lupa from '../img/lupa32x32.png';
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
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.product_description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  return (
    <div className="container">
      <div className="upper-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Qual produto você gostaria de pesquisar?"
            value={searchTerm}
            onChange={handleSearch}
          />
          <img src={Lupa} alt="Ícone"/>
        </div>
        {props.props.UserData && props.props.UserData.user.user_flag === 1 ? (
          <div className="add-product-button">Adicionar novo produto</div>
        ) : (
          <></>
        )}

      </div>

      <div className="shoppin-list-container">
        {props.props.UserData && props.props.UserData.user.user_flag === 1 ? (
          filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductInList product={product} props={props} />
            ))) : (
            <div className="no-products-found">Nenhum produto encontrado.</div>
          )
        ) : (
          filteredProducts.length > 0 ? (
            filteredProducts
              .filter((product) => product.product_quantity > 0)
              .map((product) => {
                validadeProduto = new Date(product.validade.toString());
                if (validadeProduto < new Date()) {
                  return null;
                }
                return <ProductInList product={product} props={props} />;
              })
          ) : (
            <div className="no-products-found">Nenhum produto encontrado.</div>
          ))}
      </div>
    </div>
  );

}

export default ShoppingList;