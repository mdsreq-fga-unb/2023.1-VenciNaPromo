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
        console.log(data);
        productListData =  data.products;
        return productListData;
    });
  }
