import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { translator } from '../../services/axios';
import { defaultSearch, searchByIngredient } from '../../utils/search/index';
import { toast } from 'react-toastify';

import Recipes from '../../components/Recipes';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound';

export default function Search() {
  const { item } = useParams();
  const [recipes, setRecipes] = useState([]);

  React.useEffect(() => {
    setRecipes([]);
    async function getRecipes() {
      try {
        const searchItemTranslated = await translator(
          item,
          'phrase',
          'pt',
          'en',
        );
        let requestedRecipes = await defaultSearch(searchItemTranslated);
        if (!requestedRecipes) {
          requestedRecipes = await searchByIngredient(searchItemTranslated);
        }
        if (!requestedRecipes) {
          var results = false;
        } else {
          results = await translator(requestedRecipes, 'recipe');
        }
        setRecipes(results);
      } catch (e) {
        setRecipes('error');
        if (e.code === 'ERR_NETWORK') {
          toast.error('Conecte-se a internet');
          return;
        }
        toast.error('Erro desconhecido');
      }
    }
    getRecipes();
  }, [item]);

  return recipes === 'error' ? (
    <NotFound
      message={'Ocorreu um problema ao tentar realizar a pesquisa'}
      paragraph
    />
  ) : !recipes ? (
    <NotFound message={`Nenhuma receita com "${item}" foi encontrada`} />
  ) : recipes.length > 0 ? (
    <>
      <div className="container-results-search">
        <p>
          Resultados para <strong>&quot;{item}&quot;</strong>
        </p>
      </div>
      <Recipes items={recipes} />
    </>
  ) : (
    <Loading />
  );
}
