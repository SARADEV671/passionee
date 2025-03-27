import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

//the restaurant localisation 
const Map = () => {
  return (
    <div className="container  justify-content-center mt-5 mb-5">
      <div className="row  justify-content-center">
      <div className="map-container col-6 rounded-5 ">
        <img src="/map.jpg" alt="Map" className="map-image img-fluid rounded-5" />
      </div>
      </div>
    </div>
  );
};

export default Map;


