import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Map.css"; 

const Map = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-4">
      <div className="map-container d-flex justify-content-center align-items-center">
        <img src="/map.jpg" alt="Map" className="map-image img-fluid" />
      </div>
    </div>
  );
};

export default Map;


