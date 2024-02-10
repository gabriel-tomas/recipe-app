import axios from '../../services/axios';

export const defaultSearch = async (searchItem) => {
  searchItem = searchItem.trim();
  const response = await axios.get(`/recipes/search?q=${searchItem}`);
  if (response.status !== 200) {
    return false;
  }
  if (response.data.recipes.length === 0) {
    return false;
  }

  return response.data.recipes;
};

export const searchByIngredient = async (searchItem) => {
  const response = await axios.get(`/recipes?limit=0`);
  const recipes = [];
  searchItem = searchItem.toLowerCase().trim();

  for (let recipe of response.data.recipes) {
    for (let ingredient of recipe.ingredients) {
      if (ingredient.toLowerCase().indexOf(searchItem) !== -1) {
        recipes.push(recipe);
        break;
      }
    }
  }

  if (response.status !== 200) {
    return false;
  }
  if (recipes.length === 0) {
    return false;
  }

  return recipes;
};
