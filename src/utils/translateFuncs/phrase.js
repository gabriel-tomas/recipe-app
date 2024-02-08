import axios from 'axios';
import { toast } from 'react-toastify';

export const phraseTranslation = async (
  string,
  fromLang = 'en',
  toLang = 'pt',
) => {
  try {
    const request = await axios(
      `https://api.datpmt.com/api/v1/dictionary/translate?string=${string}&from_lang=${fromLang}&to_lang=${toLang}`,
    );
    const stringTranslated = await request.data;

    console.log(stringTranslated);

    return stringTranslated;
  } catch (e) {
    toast.info('Erro ao tentar traduzir para português');
    return string;
  }
};
