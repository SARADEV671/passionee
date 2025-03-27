import React from "react";
import { Link } from 'react-scroll';

const ImageComponent = () => {
  return (
    <div className="container-fluid  d-flex flex-column " >
      <div className="row justify-content-center">
      {/* Navbar sticky */}
      <div className="col-6  ">
      <nav className="navbar  " >
        <div className="container"  >
          <div className="navbar d-flex justify-content-between w-100">
            <Link className="navbar-brand " to="accueil" smooth={true} duration={500}>Aceuille</Link>
            <Link className="navbar-brand" to="carte" smooth={true} duration={500}>carte</Link>
            <Link className="navbar-brand" to="chef" smooth={true} duration={500}>chef</Link>
            <Link className="navbar-brand" to="cuisine" smooth={true} duration={500}>cuisine</Link>
            <Link className="navbar-brand" to="menu" smooth={true} duration={500}>menu</Link>
            <Link className="navbar-brand" to="contact" smooth={true} duration={500}>contact</Link>
          </div>
          
        </div>
      </nav>
      </div>
      {/* Image centrée */}
      <div className="d-flex justify-content-center " >
        <img
          src="/restau.webp"
          alt="Mon Image"
          className="img-fluid"
       e
        
        />
      </div>
      </div>
    </div>
  );
}

export default ImageComponent;