import React, { useState } from 'react';

import axios from '../../services/axios';
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
        setRecipes(sortRecipes(response.data.recipes, 3));
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
      <Title>Receitas do dia</Title>
      {!recipes ? (
        <NotFound
          message={'Ocorreu um problema ao tentar acessar as receitas do dia'}
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
