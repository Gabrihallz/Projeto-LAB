import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import api from './Services/api';
import List from './components/List'
import './App.css'
import Navbar from "./components/Navbar"

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/selecao-2023/usuarios")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("Houve um erro!" + err);
      });
  }, []);

  return(
    <div className="app">
      <Navbar />
      <div className="container">
        <ul>
        <List user={user}/>
        </ul>

      </div>
    </div>
  );

};

export default App
