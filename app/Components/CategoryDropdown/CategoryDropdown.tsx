import React, { useState } from 'react';
import { useGlobalState } from '../../context/globalProvider';

const CategoryDropdown = () => {
  const { categories, selectedCategory, setSelectedCategory } = useGlobalState(); // Use the global state to access categories

  const handleChange = (event) => {
    console.log("YOYO" + event.target.value);
    setSelectedCategory(event.target.value);
  };

  return (
    <select value={selectedCategory || ''} onChange={handleChange}>
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;