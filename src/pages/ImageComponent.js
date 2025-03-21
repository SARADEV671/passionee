import React from "react";
import { Link } from 'react-scroll';
import "./ImageComponent.css";
const ImageComponent = () => {
  return (
    <div className="d-flex flex-column vh-100 position-relative" style={{ marginBottom: '50px' }}>
      {/* Navbar sticky */}
      <nav className="navbar navbar-light bg-white sticky-top w-100" style={{ zIndex: 1 }}>
        <div className="container" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <div className="d-flex justify-content-between w-100">
            <Link className="navbar-brand" to="accueil" smooth={true} duration={500}>Aceuille</Link>
            <Link className="navbar-brand" to="carte" smooth={true} duration={500}>carte</Link>
            <Link className="navbar-brand" to="chef" smooth={true} duration={500}>chef</Link>
            <Link className="navbar-brand" to="cuisine" smooth={true} duration={500}>cuisine</Link>
            <Link className="navbar-brand" to="menu" smooth={true} duration={500}>menu</Link>
            <Link className="navbar-brand" to="contact" smooth={true} duration={500}>contact</Link>
          </div>
        </div>
      </nav>

      {/* Image centrée */}
      <div className="d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 56px)" }}>
        <img
          src="/restau.webp"
          alt="Mon Image"
          className="img-fluid"
          style={{
            maxWidth: "100%",  // S'adapte à la largeur du conteneur
            height: "auto"     // Maintient les proportions de l'image
          }}
        />
      </div>
    </div>
  );
}

export default ImageComponent;