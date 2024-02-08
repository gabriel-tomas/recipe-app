import React, { useState } from 'react';

import axios, { translator } from '../../services/axios';
import { toast } from 'react-toastify';

import Recipes from '../../components/Recipes';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound';

import { ContainerRecipes, Title } from './styled';
import sortRecipes from './sortRecipes';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  React.useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get('/recipes?limit=25');
        if (response.status !== 200) {
          setRecipes(false);
          return;
        }
        const recipesSorted = sortRecipes(response.data.recipes, 3);
        const itemsTranslated = await translator(recipesSorted, 'recipe');
        setRecipes(itemsTranslated);
      } catch (e) {
        setRecipes(false);
        if (e.code === 'ERR_NETWORK') {
          toast.error('Conecte-se a internet');
          return;
        }
        toast.error('Erro desconhecido');
      }
    }
    getRecipes();
  }, []);

  return (
    <ContainerRecipes style={{ marginTop: `2rem` }}>
      <Title>Seleção de pratos</Title>
      {!recipes ? (
        <NotFound
          message={'Ocorreu um problema ao tentar acessar "Seleção de pratos"'}
          paragraph
        />
      ) : recipes.length > 0 ? (
        <Recipes items={recipes} />
      ) : (
        <Loading />
      )}
    </ContainerRecipes>
  );
}
