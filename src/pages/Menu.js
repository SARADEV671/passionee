import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Menu.css'; 

const Menu = () => {
  return (
    <div id="menu" className="container d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <img src="/image.png" alt="Menu" className="menu-image img-fluid mb-3" />
      <h1 className="menu-title">Bon Appétit</h1>
      <a href="/menu.jpg">
        <img src="/logo.png" alt="Logo" className="menu-logo img-fluid mt-3" />
      </a>
    </div>
  );
};

export default Menu;