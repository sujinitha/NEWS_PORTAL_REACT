// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ categories, onCategoryChange }) => {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <nav className="navbar">
      <h1>News Portal</h1>
      <select onChange={handleChange} className="category-dropdown">
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
