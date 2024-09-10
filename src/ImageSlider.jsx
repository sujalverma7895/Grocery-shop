import React, { useState } from 'react';
import './index.css';

const ImageSlider=({ images }) =>{
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-content">
        <img src={images[currentIndex].product} alt={`Slide ${currentIndex + 1}`} />
        <div className="product-info">
          <h3>{images[currentIndex].product_name}</h3>
          <p className="price-section">
            <span className="current-price">₹{images[currentIndex].current_price}</span>
            <span className="mrp">₹<s>{images[currentIndex].mrp}</s></span>
            <span className="discount">({images[currentIndex].discount}% off)</span>
          </p>
          <p className="rating" style={{ backgroundColor: 'green', color: 'white', padding: '2px 5px', borderRadius: '5px' }}>
            ⭐{images[currentIndex].rateing}
          </p>
        </div>
      </div>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
