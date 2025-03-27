import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
  return (
    <div id="menu" className="container justify-content-center flex-column mt-3">
      <div className='row justify-content-center'>
        <div className='col-3'>
          <img src="/image.png" alt="Menu" className="menu-image img-fluid mb-3 " />
          <h1 className="menu-title text-center">Bon Appétit</h1>
          <a href="/menu.jpg">
            <img src="/logo.png" alt="Logo" className="menu-logo img-fluid mt-3 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;