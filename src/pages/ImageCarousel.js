import React from 'react';
import { Carousel } from 'react-bootstrap';


const ImageCarousel = () => {
  return (
    <div className="image-carousel-container container mt-3 mb-3">
      <div className='row'>
        <div className='col-12'>
          <Carousel>
            <Carousel.Item>
              <div className="carousel-item-container">
                <img className="d-block carousel-image" src="/menu1.webp" alt="First slide" />
                <img className="d-block carousel-image" src="/menu2.webp" alt="Second slide" />
                <img className="d-block carousel-image" src="/menu3.webp" alt="Third slide" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-container">
                <img className="d-block carousel-image" src="/menu4.webp" alt="Fourth slide" />
                <img className="d-block carousel-image" src="/menu3.webp" alt="Fifth slide" />
                <img className="d-block carousel-image" src="/menu2.webp" alt="Sixth slide" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;