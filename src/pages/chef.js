import React from 'react';
import './chef.css'; 

const Chef = () => {
  return (
    <div className="chef-container">
      <div className="row justify-content-center">
       
        {/* Image du chef à gauche */}
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <img
            src="/chef.webp"
            alt="Chef"
            className="img-fluid chef-image"
          />
        </div>

        {/* Image de la cuisine à droite */}
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <img
            src="/chef2.jpg"
            alt="Cuisine"
            className="img-fluid chef2-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Chef;