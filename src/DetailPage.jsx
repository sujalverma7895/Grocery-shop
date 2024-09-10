import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api, Api2, Api3, Api4, Api5 } from './Api';
import './DetailPage.css';

const DetailPage = () => {
  const location = useLocation();
  const { state } = location;
  const { id, mainid } = state || {};
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (mainid === "A1") {
      setData(Api);
    }
    else if (mainid === "A2") {
      setData(Api2);
    }
    else if (mainid === "A3") {
      setData(Api3);
    }
    else if (mainid === "A4") {
      setData(Api4);
    }
    else if(mainid === "A5") {
      setData(Api5);
    }
  }, [mainid]);

  useEffect(() => {
    if (data.length > 0) {
      const foundProduct = data.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [data, id]);

  const handleAddToCart = () => {
    alert(`${product?.product_name} added to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${product?.product_name}`);
  };

  return (
    <div className="detail-page-container">
      <div className="breadcrumb-trail">
        <a href="/">Home</a> &gt; <a href="/grocery">Grocery</a> &gt; {product?.product_name}
      </div>

      {product ? (
        <div className="product-detail-section">
          <div className="product-image-container">
            <img
              src={product.product}
              alt={product.product_name}
            />
            <div className="product-action-buttons">
              <button className="cart-button" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="buy-button" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-info-section">
            <div className="product-description-container">
              <h3>Product Description</h3>
              <p>{product.description}</p>
            </div>
            <div className="product-title-header">
              <h1>{product?.product_name}</h1>
            </div>
            <div className="price-details">
              <h2>₹{product.current_price}</h2>
              <span className="mrp-price">₹{product.mrp}</span>
              <span className="discount-info">{product.discount}% off</span>
            </div>
            <div className="rating-info">
              <span className="rating-badge">★ {product.rating}</span>
              <span className="review-info">({product.reviews} Ratings & {product.comments} Reviews)</span>
              <span className="assured-badge">Assured</span>
            </div>
            <div className="available-offers">
              <h3>Available Offers</h3>
              <ul>
                <li><span>Partner Offer:</span> Get ₹50 off on next purchase.</li>
                <li><span>Bank Offer:</span> 5% Cashback on Axis Bank Credit Cards.</li>
                <li><span>Bank Offer:</span> 10% off up to ₹1500 on Federal Bank Cards.</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className="no-product-message">No product details available</p>
      )}
    </div>
  );
};

export default DetailPage;
