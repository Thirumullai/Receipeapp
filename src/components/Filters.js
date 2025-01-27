// components/Filters.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

function Filters() {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value)); // Dispatch the setFilter action
  };

  return (
    <div className="filters">
      <label>Filter by Category/Dietary Restriction: </label>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Gluten-Free">Gluten-Free</option>
      </select>
    </div>
  );
}

export default Filters;
