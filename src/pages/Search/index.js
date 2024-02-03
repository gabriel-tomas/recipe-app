import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../services/axios';

import Recipes from '../../components/Recipes';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound';

export default function Search() {
  const { item } = useParams();
  const [recipes, setRecipes] = useState([]);

  React.useEffect(() => {
    setRecipes([]);
    async function getRecipes() {
      const response = await axios.get(`/recipes/search?q=${item}`);
      if (response.status !== 200) {
        setRecipes(false);
        return;
      }
      if (response.data.recipes.length === 0) {
        setRecipes(false);
        return;
      }
      setRecipes(response.data.recipes);
    }
    getRecipes();
  }, [item]);

  return !recipes ? (
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
