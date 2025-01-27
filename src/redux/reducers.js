// redux/reducers.js
import { SET_RECIPES, TOGGLE_FAVORITE, SET_FILTER } from './actions';

const initialState = {
  recipes: [],
  favorites: [],
  filter: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, recipes: action.recipes };
    case TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((fav) => fav !== action.id)
          : [...state.favorites, action.id],
      };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

export default rootReducer;
