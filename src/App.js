import React from "react";
import Header from "./Header";

import ImageComponent from "./pages/ImageComponent";
import ImageCarousel from "./pages/ImageCarousel";
import Chef from "./pages/chef";
import Cuisine from "./pages/cuisine";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./pages/Menu";
import ReservationForm from "./components/ReservationForm";
import Footer from "./pages/Footer";
import Map from "./pages/Map";




function App() {
  return (
    <div>
      <Header />
      <div id="acueille">
        <ImageComponent />
      </div>
      <div id="carte">
        <ImageCarousel />
      </div>
      <div id="chef">
        <Chef />
      </div>
      <div id="cuisine">
        <Cuisine />
      </div>

      <div id="menu">
        <Menu />
      </div>
     <div id="reservation">
      <ReservationForm/>
     </div>
     <div>
     <Map/>
     </div>
     <div>
      <Footer/>
     </div>
     
    </div>
  );
}

export default App;