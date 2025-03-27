import React from 'react';
 
// footer
const Footer = () => {
  return (

    <div  id="contact" className="container-fluid footer ">
      <footer className='py-5'   >
        <div className=' row text-center'>
          <div className='col-4 fluid'>
            <h5>Téléphone</h5>
            <p>+33 06 78 15 48 99</p>
          </div>
          <div className='col-4 fluid text-center'>
          <h5>Courriel</h5>
        <p>contact@passionée.com</p>
          </div>
          <div className='col-4 fluid text-center'>
            <h5>Adresse</h5>
            <p>2 rue Léo, Lyon</p>
          </div>
        </div>
        
      </footer>
{/* footer bottom */}
      <div className="row footer-bottom justify-content-center">
           <div className="col-12 text-center">
             <p className=" mb-0">Copyright © 2025, Tous droits réservés.</p>
           <p className="made-in-france">Made with❤️</p>
           </div>
           </div>
    </div>

  )
}

export default Footer;