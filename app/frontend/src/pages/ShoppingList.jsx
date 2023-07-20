// TODO - Create a Shopping List page

import React from 'react';
import Lupa from '../img/lupa32x32.png';
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
        product_description: values.product_description,
        product_price: values.product_price,
        product_category: values.product_category,
        product_image: values.product_image,
        validade: values.validade,
        status: values.status,
        product_quantity: values.product_quantity
      };
      await addProduct(newProduct);
      getShoppingList();
      closeModal();
      setShowAddingConfirmation(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = listaDeProdutos
    ? listaDeProdutos.filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.product_description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  const [showAddingConfirmation, setShowAddingConfirmation] = useState(false);

  return (
    <div className="container">
      <div className="upper-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquise um produto"
            value={searchTerm}
            onChange={handleSearch}
          />
          <img src={Lupa} alt="Ícone" />
        </div>
        {props.props.UserData && props.props.UserData.user.user_flag === 1 ? (
          <div className="new-product-container">
            <button className="new-product-button" onClick={handleAddProduct}>Adicionar Produto</button>
          </div>
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
                  product_description: "",
                  product_price: "",
                  product_category: "",
                  product_image: "",
                  validade: "",
                  status: "",
                  product_quantity: "",
                }}
                onSubmit={(values) => addProductToList(values)}
              >
                <Form>
                  <div className="form-group">
                    <Field name="product_name" className="form-field" placeholder="Nome" />
                  </div>
                  <div className="form-group">
                    <Field name="product_price" type="number" className="form-field" placeholder="Preço" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Validade:</label>
                    <Field name="validade" type="date" className="form-field" placeholder="Validade" />
                  </div>
                  <div className="form-group">
                    <Field
                      as="select"
                      name="status"
                      className="form-field"
                    >
                      <option value="">Disponibilidade</option>
                      <option value={1}>Disponível</option>
                      <option value={0}>Não Disponível</option>
                    </Field>
                  </div>
                  <div className="form-group">
                    <Field name="product_quantity" type="number" className="form-field" placeholder="Quantidade" />
                  </div>
                  <div className="register-form-group">
                    <Field name="product_description" className="form-field" placeholder="Descrição" />
                  </div>
                  <div className="form-group">
                    <Field name="product_category" className="form-field" placeholder="Categoria" />
                  </div>
                  <div className="form-group">
                    <Field name="product_image" className="form-field" placeholder="URL da imagem" />
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

      {showAddingConfirmation && (
        <div className="addding-confirmation-modal">
          <div className="addding-confirmation-modal-content">
            <h2>Produto adicionado com sucesso!</h2>
            <div className="addding-confirmation-modal-buttons">
              <button
              className="addding-confirmation-modal-button"
              onClick={() => setShowAddingConfirmation(false)}>
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;