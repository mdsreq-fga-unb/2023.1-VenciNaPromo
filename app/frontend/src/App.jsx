import logo from './logo.svg';
import './styles/App.css';
import { useState, useEffect, useRef } from "react";
import ShoppingList from './pages/ShoppingList';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [UserData, setUserData] = useState(null);
  const [isVisitor, setIsVisitor] = useState(false);

  async function getUserData(){
    await fetch("http://localhost:8080/user/profile",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    })
    .then(response => {return response.json()})
    .then(data => {
      setUserData(data)
    });
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    // if there is a token stored, set it as the access token and set the user as logged in
    if (storedToken) {
      setAccessToken(storedToken);
      setIsLoggedIn(true);
      getUserData()
    }
  }, [accessToken]);

  return (
    <div className="App">
      <div className="content">
        <Sidebar props={{ UserData }} />
        <Header />

        <Router>
          <Routes>
            {isLoggedIn || isVisitor ? (
              <Route path="/" element={<ShoppingList props={{ UserData }} />} />
            ) : (
              <Route
                path="/"
                element={
                  <Login
                    setIsLoggedIn={setIsLoggedIn}
                    setIsVisitor={setIsVisitor}
                  />
                }
              />
            )}

            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;