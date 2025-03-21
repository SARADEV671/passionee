import React from 'react';
import './Cuisine.css'; 

const Cuisine = () => {
  return (
    <> 
    <div id="cuisine" className="cuisine-container">
      <div className="row cuisine-row">
        <div className="col-md-6 cuisine-image-container">
          <img src="/nospain.png" className="img-fluid cuisine-image mt-5" alt="Image 1" />
        </div>
        <div className="col-md-6 cuisine-image-container">
          <img src="/nosdesserts.png" className="img-fluid cuisine-image mt-5" alt="Image 2" />
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-6 cuisine-image-container">
          <img src="/notresalle.png" className="img-fluid cuisine-image" alt="Image 1" />
        </div>
        <div className="col-md-6 cuisine-image-container">
          <img src="/NotreCarte.png" className="img-fluid cuisine-image" alt="Image 2" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Cuisine;