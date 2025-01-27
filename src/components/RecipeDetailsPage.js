import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetailsPage() {
  const { id } = useParams(); // Get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipe(data.meals[0]); // Set the selected recipe's details
        }
      });
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  const {
    strMeal,
    strInstructions,
    strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
    strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
    strCategory,
    strArea,
    strTags,
    strMealThumb,
    strPrepTime,
  } = recipe;

  // Prepare ingredients
  const ingredients = [
    { ingredient: strIngredient1, measure: strMeasure1 },
    { ingredient: strIngredient2, measure: strMeasure2 },
    { ingredient: strIngredient3, measure: strMeasure3 },
    { ingredient: strIngredient4, measure: strMeasure4 },
    { ingredient: strIngredient5, measure: strMeasure5 },
  ];

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <img src={strMealThumb} alt={strMeal} className="recipe-image" />
        <div className="recipe-info">
          <h2>{strMeal}</h2>
          <p><strong>Category:</strong> {strCategory}</p>
          <p><strong>Area:</strong> {strArea}</p>
          {strTags && <p><strong>Tags:</strong> {strTags}</p>}
          <p><strong>Preparation Time:</strong> {strPrepTime || "N/A"}</p>
        </div>
      </div>

      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((item, index) => (
            item.ingredient && item.measure && (
              <li key={index}>
                {item.ingredient} - {item.measure}
              </li>
            )
          ))}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions:</h3>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
