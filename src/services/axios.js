import axios from 'axios';
import { recipesTranslation } from '../utils/translateFuncs/recipes';
import { phraseTranslation } from '../utils/translateFuncs/phrase';

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
  } else if (type === 'phrase') {
    return phraseTranslation(string, fromLang, toLang);
  }
};
