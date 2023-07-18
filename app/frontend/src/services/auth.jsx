  import axios from 'axios';

  const BASE_URL = process.env.REACT_APP_API_URL;

  export const register = async (userData) => {
    try {
      const response = await axios.post(BASE_URL + '/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error('Erro no cadastro'); 
    }
  };

  export const login = async (userData) => {
    try { 
      const response = await axios.post(BASE_URL + '/auth/login', userData);
      return response.data; 
    } catch (error) {
      throw new Error('Erro no login'); 
    }
  };

  export const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    window.location.reload();
  }
