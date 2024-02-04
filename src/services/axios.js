import axios from 'axios';
import { recipesTranslation } from '../utils/translateFuncs/recipes';

export default axios.create({
  baseURL: 'https://dummyjson.com',
});

export const translator = async (
  string,
  type,
  fromLang = 'en',
  toLang = 'pt',
) => {
  if (type === 'recipe') {
    return recipesTranslation(string, fromLang, toLang);
  }
};
