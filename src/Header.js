import React from "react";

const Header = () => {
  return (
    <header className="container-fluid bg-light py-3">
      <div className="row align-items-center">

        <div className="col-3 text-start">
          <img src="/logo3.webp" alt="Logo resto" className="img-fluid" style={{ height: "70px" }} />
        </div>


        <div className="col-6 text-center">
          <h1 className="h4 fw-bold" style={{ fontFamily: "'Leckerli One', cursive" }}>Passionée</h1>
        </div>


        <div className="col-3 text-end">
          <img src="/france.png" alt="Logo Droit" className="img-fluid" style={{ height: "60px" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;