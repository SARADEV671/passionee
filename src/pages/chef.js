import React from 'react';


const Chef = () => {
  return (
    <div className="container-fluid chef">
      <div className="row ">
        <div className="col-md-6 col-sm-12 ">
          <img
            src="/chef.webp"
            alt="Chef"
            className="img-fluid chef-image"
            />
            </div>
        <div className="col-md-6  col-sm-12">
          <img
            src="/chef2.jpg"
            alt="Cuisine"
            className="img-fluid chef2-image mt-5"
        />
         </div> 
        
         </div>
    </div>
  );
};

export default Chef;