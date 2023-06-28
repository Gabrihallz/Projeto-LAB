import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src="./src/assets/marca_ufg.svg" alt="logo" height="70px" />
        <div className="divSearch">
          <label For="search">Pesquisar:</label>
          <input type="search" />
        </div>
    </nav>
  )
}
export default Navbar