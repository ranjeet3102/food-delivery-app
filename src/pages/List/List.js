import React, { useState } from 'react';
import './List.css';

const List = () => {
  const [categories] = useState([
    { name: 'Burger', available: true, restaurantCount: 5 },
    { name: 'Pizza', available: false, restaurantCount: 3 },
    { name: 'Pasta', available: true, restaurantCount: 4 },
    { name: 'Sushi', available: false, restaurantCount: 2 },
    { name: 'Salads', available: true, restaurantCount: 6 }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategorySelect = (e) => {
    const selected = categories.find(category => category.name === e.target.value);
    setSelectedCategory(selected);
  };

  // Function to render filtered categories
  const renderCategoryOptions = () => {
    const filteredCategories = categories.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredCategories.length > 0 ? (
      filteredCategories.map((category, index) => (
        <option key={index} value={category.name}>
          {category.name}
        </option>
      ))
    ) : (
      <option value="">No categories found</option>
    );
  };

  return (
    <div className='bb'>
    
    <div className="container">
      <h2 className="title">Select Category</h2>

      <form className="form">
       
        <label htmlFor="search" className="label">
          Search categories:
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="input"
          aria-label="Search categories"
        />

        {/* Dropdown for filtered categories */}
        <label htmlFor="category-select" className="label">
          Choose a category:
        </label>
        <select
          id="category-select"
          onChange={handleCategorySelect}
          value={selectedCategory ? selectedCategory.name : ''}
          className="dropdown"
        >
          <option value="">Select a category</option>
          {renderCategoryOptions()}
        </select>
      </form>

      {/* Display the selected category and details */}
      {selectedCategory && (
        <div className="selected">
          <p>
            Selected Category: <strong>{selectedCategory.name}</strong>
          </p>
          <p>
            Availability: <strong>{selectedCategory.available ? 'Available' : 'Not Available'}</strong>
          </p>
          <p>
            Number of Restaurants: <strong>{selectedCategory.restaurantCount}</strong>
          </p>
        </div>
      )}
    </div>
    </div>
  );
};

export default List;
