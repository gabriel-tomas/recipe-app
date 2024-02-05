import axios from 'axios';
import { toast } from 'react-toastify';

export const recipesTranslation = async (
  items,
  fromLang = 'en',
  toLang = 'pt',
) => {
  try {
    const itemsJSON = [];
    if (items instanceof Array) {
      items.forEach((item) => {
        itemsJSON.push(
          JSON.stringify({
            id: item.id,
            n: item.name,
            in: item.ingredients,
            ins: item.instructions,
            cui: item.cuisine,
            tg: item.tags,
            mt: item.mealType,
          }),
        );
      });
    } else {
      itemsJSON.push(
        JSON.stringify({
          id: items.id,
          n: items.name,
          in: items.ingredients,
          ins: items.instructions,
          cui: items.cuisine,
          tg: items.tags,
          mt: items.mealType,
        }),
      );
    }

    const request = await axios(
      `https://api.datpmt.com/api/v1/dictionary/translate?string=${itemsJSON}&from_lang=${fromLang}&to_lang=${toLang}`,
    );

    let data = await request.data;

    data = data.replace('"]"cui"', '"],"cui"');
    const dataTranslated = JSON.parse(`[${data}]`);

    if (items instanceof Array) {
      dataTranslated.forEach((item) => {
        items.forEach((itemChange) => {
          if (itemChange.id === item.id) {
            itemChange.name = item.n;
            itemChange.ingredients = item.in;
            itemChange.instructions = item.ins;
            itemChange.cuisine = item.cui;
            itemChange.tags = item.tg;
            itemChange.mealType = item.mt;
          }
        });
      });
    } else {
      items.name = dataTranslated[0].n;
      items.ingredients = dataTranslated[0].in;
      items.instructions = dataTranslated[0].ins;
      items.cuisine = dataTranslated[0].cui;
      items.tags = dataTranslated[0].tg;
      items.mealType = dataTranslated[0].mt;
    }

    return items;
  } catch (e) {
    toast.info('Erro ao tentar traduzir para português');
    return items;
  }
};
