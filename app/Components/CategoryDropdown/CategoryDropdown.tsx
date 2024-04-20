import React, { useState } from 'react';
import { useGlobalState } from '../../context/globalProvider';

const CategoryDropdown = ({ onSelectCategory }) => {
  const { categories } = useGlobalState(); // Use the global state to access categories
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onSelectCategory(category); // Callback to handle category selection
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
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