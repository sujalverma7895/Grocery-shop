import './App.css';
import { Api, Api2, Api3, Api4, Api5 } from './Api';
import { useState, useEffect } from 'react';
import { FaUser, FaEllipsisV, FaShoppingCart, FaStoreAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from "./llogo.png"; 
import user from "./User_Icon.png";
import Cart from "./cart.png";
import Sellr from "./sellere.png";
import menu from "./menu_icon.png";
import Slider from "./ImageSlider"

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [count, setCount] = useState(0);
  const [cartarr, setCartArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [see, setSee] = useState(false);
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
    'Baby Care',
  ];

  useEffect(() => {
    setData(Api); // Initialize data
    setFilteredData(Api); // Initialize filtered data
  }, []);

  const task = (category) => {
    setSelectedCategory(category); // Set the selected category

    let newData;
    switch (category) {
      case 'Fruits':
        newData = Api3;
        break;
      case 'Vegetables':
        newData = Api2;
        break;
      case 'Dairy':
        newData = Api4;
        break;
      case 'Bakery':
        newData = Api5;
        break;
      default:
        newData = Api;
    }

    setData(newData);
    filterData(newData, searchQuery); // Filter data based on the search query
  };

  const filterData = (dataToFilter, search) => {
    const filtered = dataToFilter.filter((item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchQuery(search);
    filterData(data, search);
  };

  const viewDetail = (id, mainid) => {
    navigate('/details', { state: { id, mainid } });
  };
  
  const toggleMenu = () => {
    setSee((prev) => !prev); 
  };

  return (
    <div className='app-container'>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Flipkart Logo" />
        </div>
        <div className="search-container">
          <select
            className="category-dropdown"
            onChange={(e) => task(e.target.value)}
            value={selectedCategory}
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            className="search-input"
            placeholder="Search for items"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button type="submit" className="search-button">🔍</button>
        </div>

        <div className="header-icons">
          <div className="icon">
            <FaUser />
            <img src={user} alt="User Icon" />
            <span>Account</span>
          </div>
          <div className="icon" onClick={cartdata}>
            <FaShoppingCart />
            <img src={Cart} alt="Cart Icon" />
            <p> <sup>{count}</sup></p>
            <span>Cart</span>
          </div>
          <div className="icon">
            <FaStoreAlt />
            <img src={Sellr} alt="Seller Icon" />
            <span>Become a Seller</span>
          </div>
          <div className="icon">
            <FaEllipsisV />
          </div>
        </div>
      </header>

      <div className='main-content'>
        <div className={`sidebar ${see ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="top">
            <img onClick={toggleMenu} className="menu" src={menu} alt="Menu Icon" />
          </div>
          {see && (
            <>
              <h2 className="sidebar-title">Grocery Products</h2>
              <ul className="sidebar-list">
                {categories.map((category, index) => (
                  <li key={index} className="sidebar-item" onClick={() => task(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
       
        <div className='product-container'>
          {filteredData && filteredData.map((item, index) => (
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
