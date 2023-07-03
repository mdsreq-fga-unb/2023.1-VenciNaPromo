import axios from 'axios';

let productListData;

export const getProductListData = () => productListData;

export const productList = async () => {
  await fetch("http://localhost:8080/product_list/get_list",{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
  })
  .then(response => {return response.json()})
  .then(data => {
      productListData =  data.products;
      return productListData;
  });
}

export const removeProduct = async (product_id) => {
  await fetch("http://localhost:8080/product_list/remove_product",{
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    body: JSON.stringify({
      product_id: product_id
    })
  })
  .then(response => {return response.json()})
}
export const addProduct = async (newProduct) => {
  try {
    const response = await fetch("http://localhost:8080/product_list/add_product", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(newProduct)
    });

    if (!response.ok) {
      throw new Error('Error adding product to list');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error adding product to list');
  }
};
