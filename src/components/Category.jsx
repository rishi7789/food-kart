// src/components/Category.js
import React from 'react';

const Category = ({ onSelectCategory }) => {
  return (
    <div className="categories">
      <button onClick={() => onSelectCategory('All')}>All</button>
      <button onClick={() => onSelectCategory('Breakfast')}>Breakfast</button>
      <button onClick={() => onSelectCategory('Lunch')}>Lunch</button>
      <button onClick={() => onSelectCategory('Dinner')}>Dinner</button>
    </div>
  );
};

export default Category;
