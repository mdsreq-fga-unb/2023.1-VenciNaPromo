  import { useState } from 'react';
  import axios from 'axios';
  
  function Component () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const register = async (userData) => {
      try {
        const response = await axios.post('http://localhost:8080/auth/register', userData);
        return response.data;
      } catch (error) {
        throw new Error('Erro no cadastro'); 
      }
    };
  
    const login = async (userData) => {
        try { 
          setIsLoggedIn(true);
          const response = await axios.post('http://localhost:8080/auth/login', userData);
          return response.data;
        } catch (error) {
          throw new Error('Erro no login'); 
        }
  
    };
  
    const logout = async () => {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      window.location.reload();
    }

  }
  
  export default Component;