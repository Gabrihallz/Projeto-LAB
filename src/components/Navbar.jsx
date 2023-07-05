import React, { useState } from "react";
import "./Navbar.css";
import "./List";

const Navbar = ({ busca, setBusca }) => {
  return (
    <nav className="navbar">
      <img src="./src/assets/marca_ufg.svg" alt="logo" height="70px" />
      <div className="divBusca">
        <input
          type="text"
          id="txtBusca"
          placeholder="Buscar..."
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        />
      </div>
    </nav>
  );
};
export default Navbar;
