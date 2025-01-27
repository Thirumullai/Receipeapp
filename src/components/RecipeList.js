import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/actions';

function RecipeList({ recipes }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
          <p>{recipe.strCategory}</p>
          <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link> {/* Link to Recipe Details Page */}
          <button onClick={() => dispatch(toggleFavorite(recipe.idMeal))}>
            {favorites.includes(recipe.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
