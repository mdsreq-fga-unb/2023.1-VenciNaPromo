// TODO - Create a Shopping List page

import React from 'react';
import '../styles/ShoppingList.css';
import '../styles/ProductInList.css';
import '../styles/ProductDetail.css';
import { ErrorMessage, Formik, Form, Field } from "formik";
import { productList, getProductListData } from '../services/products';
import { useEffect, useState } from 'react';
import ProductInList from '../components/ProductInList';
import { addProduct } from '../services/products';

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
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const addProductToList = async (values) => {
    try {
      const newProduct = {
        product_name: values.product_name,
        product_price: values.product_price,
        validade: values.validade,
        status: values.status,
        product_quantity: values.product_quantity,
        product_description: values.product_description
      };

      await addProduct(newProduct);
      getShoppingList(); 
      closeModal(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="new-product-container">
        <button className="new-product-button" onClick={handleAddProduct}>Adicionar Produto</button>
      </div>
      <div className="search-bar">
      </div>
      <div className="shopping-list-container">
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
            <div className="new-product-form">
              <h3 className='h3-modal'>Adicionar Produto</h3>
              <Formik
                initialValues={{
                  product_name: "",
                  product_price: "",
                  validade: "",
                  status: "",
                  product_quantity: "",
                  product_description: ""
                }}
                onSubmit={(values) => addProductToList(values)} 
              >
                <Form className="register-form">
                  <div className="form-group">
                    <Field name="product_name" className="form-field" placeholder="Nome"/>
                  </div>
                  <div className="form-group">
                    <Field name="product_price" type="number" className="form-field" placeholder="Preço" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Validade:</label>
                    <Field name="validade" type="date" className="form-field" placeholder="Validade"/>
                  </div>
                  <div className="form-group">
                    <Field
                      as="select"
                      name="status"
                      className="form-field"
                    >
                      <option value="">Disponibilidade</option>
                      <option value={0}>Disponível</option>
                      <option value={1}>Não Disponível</option>
                    </Field>
                  </div>
                  <div className="form-group">
                    <Field name="product_quantity" type="number" className="form-field" placeholder="Quantidade"/>
                  </div>
                  <div className="register-form-group">
                    <Field name="product_description" className="form-field" placeholder="Descrição" />
                  </div>
                  <button className="button-add" type="submit">
                    Adicionar
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;