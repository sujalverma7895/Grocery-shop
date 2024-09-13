import { useLocation } from 'react-router-dom';
import './Cartcomponent.css'; 
import logo from "./llogo.png"; 
import user from "./User_Icon.png";
import Cart from "./cart.png";
import Sellr from "./sellere.png";
import menu from "./menu_icon.png";
import Slider from "./ImageSlider"

const Cartcomponent = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [see, setSee] = useState(false);


  const toggleMenu = () => {
    setSee((prev) => !prev); 
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchQuery(search);
    filterData(data, search);
  };

  return (
    <div className="cart-container">
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
