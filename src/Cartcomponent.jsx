import { useLocation } from 'react-router-dom';
import './Cartcomponent.css'; // Create this CSS file to style the Cartcomponent

const Cartcomponent = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-image">
                <img src={item.product} alt={item.product_name} />
              </div>
              <div className="cart-details">
                <p className="cart-product-name">{item.product_name}</p>
                <p className="cart-price">Price: ₹{item.current_price}</p>
                <p className="cart-mrp">MRP: ₹{item.mrp}</p>
                <p className="cart-discount">{item.discount}% off</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cartcomponent;
