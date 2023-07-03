// TODO - Create a Shopping List page

import React from 'react';
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
  const [showModal, setShowModal] = useState(false);

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
  const handleAddProduct = () => {
    setShowModal(true); // Mostra a modal quando o botão "Adicionar Produto" é clicado
  };

  const closeModal = () => {
    setShowModal(false); // Fecha a modal quando o botão "OK" é clicado
  };

  return (
    <div className="container">
      <div>
        <button className="new-product-button" onClick={handleAddProduct}>Adicionar Produto</button>
      </div>
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="modal-close-button"
              onClick={closeModal}
            >X</button>
            {/* <div className="product-detail-button">Adicionar</div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;