import './App.css'
import { useEffect, useState } from 'react';
import api from './Services/api';
import List from './components/List'

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
      <div className="container">
        <List user={user}/>
      </div>
    </div>
  );

};

export default App
