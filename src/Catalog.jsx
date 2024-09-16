import React from "react";
// import "./Catalog.css"; // Import the CSS file for styling
import { FaUser, FaEllipsisV, FaShoppingCart, FaStoreAlt } from 'react-icons/fa';
import logo from "./llogo.png"; 
import user from "./User_Icon.png";
import Cart from "./cart.png";
import Sellr from "./sellere.png";
import catlog1 from "../Product_images/catlog1.webp"; // Importing images sequentially
import catlog2 from "../Product_images/catlog2.webp";
import catlog3 from "../Product_images/catlog3.webp";
import catlog4 from "../Product_images/catlog4.webp";
import catlog5 from "../Product_images/catlog5.webp";
import catlog6 from "../Product_images/catlog6.webp";
import catlog7 from "../Product_images/catlog7.webp";
import catlog8 from "../Product_images/catlog8.webp";
import catlog9 from "../Product_images/catlog9.webp";
import catlog10 from "../Product_images/catlog10.webp";
import catlog11 from "../Product_images/catlog11.webp";
import catlog12 from "../Product_images/catlog12.webp";
import catlog13 from "../Product_images/catlog13.webp";

// Category data
const categories = [
  { name: "Fruits & Vegetables", image: catlog1 },
  { name: "Atta, Rice, Oil & Dals", image: catlog2 },
  { name: "Masala & Dry Fruits", image: catlog3 },
  { name: "Sweet Cravings", image: catlog4 },
  { name: "Toys & Sports", image: catlog5 },
  { name: "Apparel & Lifestyle", image: catlog6 },
  { name: "Jewellery & Accessories", image: catlog7 },
  { name: "Frozen Food", image: catlog8 },
  { name: "Ice Creams & More", image: catlog9 },
  { name: "Packaged Food", image: catlog10 },
  { name: "Dairy, Bread & Eggs", image: catlog11 },
  { name: "Cold Drinks & Juices", image: catlog12 },
  { name: "Munchies & Chips", image: catlog13 },
];

const Catalog = () => {
  return (
    <div className="catalog-container">
       <header className="header">
        <div className="logo">
          <img src={logo} alt="Flipkart Logo" />
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for items"
          />
          <button type="submit" className="search-button">🔍</button>
        </div>

        <div className="header-icons">
          <div className="icon">
            <FaUser />
            <img src={user} alt="User Icon" />
            <span>Account</span>
          </div>
          <div className="icon">
            <FaShoppingCart />
            <img src={Cart} alt="Cart Icon" />
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

      <div className="categories-section">
        <h2>Explore By Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.image} // Correct image reference
                alt={category.name}
                className="category-image"
              />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
