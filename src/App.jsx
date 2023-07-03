import { useEffect, useState } from "react";
import api from "./Services/api";
import List from "./components/List";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  const [user, setUser] = useState();
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const params = { filtro: busca };
    api
      .get("/selecao-2023/usuarios", { params: params })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("Houve um erro!" + err);
      });
  }, [busca]); //useEffect está atualizando sempre que buscar e quando iniciar.

  return (
    <div className="app">
      <Navbar busca={busca} setBusca={setBusca} />
      <div className="container">
        <ul>
          <List user={user} />
        </ul>
      </div>
    </div>
  );
}
