  import axios from 'axios';

  export const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error('Erro no cadastro'); 
    }
  };

  export const login = async (userData) => {
    try { 
      const response = await axios.post('http://localhost:8080/auth/login', userData);
      return response.data; 
    } catch (error) {
      throw new Error('Erro no login'); 
    }
  };

  export const logout = async () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
