import React from 'react';

// my kitchen 
const Cuisine = () => {
  return (
    <>
      <div id="cuisine" className="container-fluid cuisine mt-5 mb-5">
        <div className="row ">
          <div className="col-6 ">
            <img src="/nospain.png" className="img-fluid mt-4 " alt="nos paints" />
          </div>
          <div className="col-6 ">
            <img src="/nosdesserts.png" className="img-fluid mt-4 " alt="nos dessert" />
          </div>
        </div>
        <div className="row ">
          <div className="col-6 ">
            <img src="/notresalle.png" className="img-fluid mt-4" alt="notre salle" />
          </div>
          <div className="col-6 ">
            <img src="/NotreCarte.png" className="img-fluid mt-4 " alt="notre carte" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuisine;