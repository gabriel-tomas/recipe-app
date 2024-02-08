import axios from 'axios';
import { toast } from 'react-toastify';

export const recipesTranslation = async (
  items,
  fromLang = 'en',
  toLang = 'pt',
) => {
  try {
    let itemsJSON = [];
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

    if (itemsJSON.length > 4) {
      let newItemsJson = [];
      let itemsToAdd = [];
      let countToAdd = 0;
      itemsJSON.forEach((item) => {
        if (countToAdd === 4) {
          newItemsJson.push(itemsToAdd);
          itemsToAdd = [];
          countToAdd = 0;
        }
        countToAdd++;
        itemsToAdd.push(item);
      });
      if (newItemsJson.length !== itemsJSON.length) {
        newItemsJson.push(itemsToAdd);
      }
      itemsJSON = [...newItemsJson];
    }

    let request;
    let dataTranslated = '';
    if (items.length > 4) {
      for (let item of itemsJSON) {
        request = await axios(
          `https://api.datpmt.com/api/v1/dictionary/translate?string=${item}&from_lang=${fromLang}&to_lang=${toLang}`,
        );
        dataTranslated += await request.data;
      }
    } else {
      request = await axios(
        `https://api.datpmt.com/api/v1/dictionary/translate?string=${itemsJSON}&from_lang=${fromLang}&to_lang=${toLang}`,
      );
      dataTranslated = await request.data;
    }

    dataTranslated = `[${dataTranslated}]`
      .replaceAll('}', '},')
      .replaceAll(',,', ',')
      .replaceAll(',]', ']')
      .replaceAll('"]"', '"],"')
      .replaceAll('"]"', '"],"')
      .replaceAll(', ,', ',');

    const dataParsed = JSON.parse(dataTranslated);

    dataParsed.forEach((item, index) => {
      Object.keys(item).forEach((objectKey) => {
        if (objectKey[0] === ' ' || objectKey[objectKey.length - 1] === ' ') {
          dataParsed[index][objectKey.trim()] = item[objectKey];
          delete dataParsed[index][objectKey];
        }
      });
    });

    if (items instanceof Array) {
      dataParsed.forEach((item) => {
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
      items.name = dataParsed[0].n;
      items.ingredients = dataParsed[0].in;
      items.instructions = dataParsed[0].ins;
      items.cuisine = dataParsed[0].cui;
      items.tags = dataParsed[0].tg;
      items.mealType = dataParsed[0].mt;
    }

    return items;
  } catch (e) {
    toast.info('Erro ao tentar traduzir para português');
    return items;
  }
};
