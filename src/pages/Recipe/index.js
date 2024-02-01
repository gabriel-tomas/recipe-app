import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegClock, FaUserFriends, FaStar } from 'react-icons/fa';
/* import { toast } from 'react-toastify'; */

import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { ContainerRecipe } from './styled';

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(false);
  const mealDifficultys = {
    easy: 'Fácil',
    medium: 'Moderado',
    hard: 'Dificíl',
  };

  React.useEffect(() => {
    async function getRecipe() {
      const response = await axios.get(`/recipes/${id}`);
      if (response.status !== 200) {
        setRecipe({});
        return;
      }
      console.log(response.data);
      setRecipe(response.data);
    }
    getRecipe();
  }, []);

  return (
    <>
      {recipe ? (
        <ContainerRecipe>
          <div className="container-img">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <div className="container-meal-info">
            <div className="container-title">
              <h1>{recipe.name}</h1>
            </div>
            <div className="container-more-info">
              <span className="cook">
                <FaRegClock />
                <span>Cozimento - {recipe.cookTimeMinutes} min</span>
              </span>
              <span className="prep">
                <FaRegClock />
                <span>Preparamento - {recipe.prepTimeMinutes} min</span>
              </span>
              <span className="servings">
                <FaUserFriends />
                <span>Serve - {recipe.servings} pessoas</span>
              </span>
              <div className="container-difficulty-rating">
                <span>
                  Dificuldade -{' '}
                  {mealDifficultys[recipe.difficulty.toLowerCase()]}
                </span>
                <span className="rating">
                  <FaStar />
                  {recipe.rating}
                </span>
              </div>
            </div>
          </div>
        </ContainerRecipe>
      ) : (
        <Loading />
      )}
    </>
  );
}
