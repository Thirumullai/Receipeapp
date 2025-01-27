// redux/actions.js
export const SET_RECIPES = 'SET_RECIPES';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTER = 'SET_FILTER'; // Only one filter action

export const setRecipes = (recipes) => ({ type: SET_RECIPES, recipes });
export const toggleFavorite = (id) => ({ type: TOGGLE_FAVORITE, id });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
