import React from 'react';
import './Footer.css'; // Assurez-vous de lier le fichier CSS

const Footer = () => {
  return (
    <>
    <footer className="footer bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Section Téléphone */}
          <div className="col-md-4 col-12 mb-3 phone-section">
            <h5>Téléphone</h5>
            <p>+33 06 78 15 48 99</p>
          </div>
          
          {/* Section Adresse */}
          <div className="col-md-4 col-12 mb-3 address-section">
            <h5>Adresse</h5>
            <p>2 rue Léo, Lyon</p>
          </div>
          
          {/* Section Courriel */}
          <div className="col-md-4 col-12 mb-3 email-section">
            <h5>Courriel</h5>
            <p>contact@passionée.com</p>
          </div>
        </div>
        
        
      </div>
     
    </footer>

     {/* Section Copyright et Made in France */}
     <div className="row footer-bottom justify-content-center">
          <div className="col-12 text-center">
            <p className="copyright-text mb-0">Copyright © 2025, Tous droits réservés.</p>
            <p className="made-in-france">Made with<span role="img" aria-label="heart">❤️</span></p>
          </div>
        </div>
    </>
  );
};

export default Footer;