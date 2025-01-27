// components/Home.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRecipes, setFilter } from '../redux/actions'; // Only import setFilter
import RecipeList from './RecipeList';
import Filters from './Filters';

function Home() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) dispatch(setRecipes(data.meals));
      });
  }, [dispatch]);

  const filteredRecipes = recipes.filter((recipe) => {
    const lowerSearch = search.toLowerCase();
    const lowerMealName = recipe.strMeal.toLowerCase();
    const lowerCategory = recipe.strCategory ? recipe.strCategory.toLowerCase() : '';
    const lowerTags = recipe.strTags ? recipe.strTags.toLowerCase() : '';

    return (
      lowerMealName.includes(lowerSearch) &&
      (filter
        ? lowerCategory.includes(filter.toLowerCase()) || lowerTags.includes(filter.toLowerCase())
        : true)
    );
  });

  return (
    <div className="app">
      <h1>Recipe App</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Filters />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Home;
