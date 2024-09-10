import './App.css';
import { Api, Api2, Api3, Api4, Api5 } from './Api';
import { useState, useEffect } from 'react';
import { FaUser, FaEllipsisV, FaShoppingCart, FaStoreAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [cartarr, setCartArr] = useState([]);
  const navigate = useNavigate(); // Hook for navigation
  
  const cart = (item) => {
    setCartArr([...cartarr, item]);
    setCount(count + 1);
    console.log(cartarr);
  };

  const cartdata = () => {
    navigate('/Cartcomponent', { state: { cartItems: cartarr } });
  };

  const categories = [
    'Fruits',
    'Vegetables',
    'Dairy',
    'Bakery',
    'Snacks',
    'Beverages',
    'Staples',
    'Personal Care',
    'Home Care',
    'Meat',
    'Seafood',
    'Beverages',
    'Baby Care',
  ];

  useEffect(() => {
    setData(Api);
  }, []);

  const task = (category) => {
    if (category === 1) {
      setData(Api2);
    } else if (category === 0) {
      setData(Api3);
    } else if (category === 4) {
      setData(Api);
    } else if (category === 2) {
      setData(Api4);
    } else if (category === 8) {
      setData(Api5);
    }
  };

  const viewDetail = (id, mainid) => {
    navigate('/details', { state: { id, mainid } }); // Navigate with state
  };

  return (
    <div className='app-container'>
      <header className="header">
        <div className="logo">
          <img src="your-logo.png" alt="Flipkart Logo" />
          <span className="explore-plus">Explore <span className="plus">Plus</span></span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for Products, Brands and More" />
        </div>
        <div className="header-icons">
          <div className="icon">
            <FaUser />
            <span>Login</span>
          </div>
          <div className="icon" onClick={cartdata}>
            <span>{count}</span>
            <FaShoppingCart />
            <span>Cart</span>
          </div>
          <div className="icon">
            <FaStoreAlt />
            <span>Become a Seller</span>
          </div>
          <div className="icon">
            <FaEllipsisV />
          </div>
        </div>
      </header>

      <div className='main-content'>
        <div className="sidebar">
          <h2 className="sidebar-title">Grocery Products</h2>
          <ul className="sidebar-list">
            {categories.map((category, index) => (
              <li key={index} className="sidebar-item" onClick={() => task(index)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className='product-container'>
          {data && data.map((item, index) => (
            <div className='product-card' key={index}>
              <div className='product-image'>
                <img src={item.product} alt={item.product_name} onClick={() => viewDetail(item.id, item.mainid)} />
              </div>
              <p className='product-name' onClick={() => viewDetail(item.id, item.mainid)}>{item.product_name}</p>
              <div className='pricing' onClick={() => viewDetail(item.id, item.mainid)}>
                <p className='current-price'>₹{item.current_price}</p>
                <p className='mrp'>₹{item.mrp}</p>
                <p className='discount'>{item.discount}% off</p>
              </div>
              <div className='mrp-discount'>
                <div className='rating'>
                  <FaStar className='star-icon' />
                  <span>{item.rateing}</span>
                </div>
                <button onClick={() => cart(item)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
