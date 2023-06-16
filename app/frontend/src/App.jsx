import logo from './logo.svg';
import './styles/App.css';
import { useState, useEffect, useRef } from "react";
import ShoppingList from './pages/ShoppingList';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [UserData, setUserData] = useState(null);
  const [isVisitor, setIsVisitor] = useState(false);

  async function getUserData(){
    await fetch("http://localhost:8000/getUserData",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
    })
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
    });
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    // if there is a token stored, set it as the access token and set the user as logged in
    if (storedToken) {
      setAccessToken(storedToken);
      setIsLoggedIn(true);
      //getUserData()
    }
  }, [accessToken]);

  return (
    <div className="App">
      <div className="background">
        <span
          className="blob"
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
          }}
        />
        <div className="blur" />
      </div>
      <div className="content">
        {isLoggedIn ? (
          <ShoppingList />
        ) : (
          isVisitor ? (
            <ShoppingList />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} setIsVisitor={setIsVisitor} />
          )
        )}
      </div>
    </div>
  );
}

export default App;