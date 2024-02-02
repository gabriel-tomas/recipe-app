import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegClock, FaUserFriends, FaStar } from 'react-icons/fa';
import { FaBowlFood } from 'react-icons/fa6';

import axios from '../../services/axios';
import Loading from '../../components/Loading';
import {
  ContainerWrapper,
  ContainerRecipe,
  ContainerIngredients,
  ContainerInstructions,
} from './styled';

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
      setRecipe(response.data);
    }
    getRecipe();
  }, []);

  return (
    <>
      {recipe ? (
        <ContainerWrapper>
          <ContainerRecipe>
            <div className="container-img">
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="container-meal-info">
              <div className="container-top">
                <div className="container-title">
                  <h1>{recipe.name}</h1>
                </div>
                <div className="container-info">
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
                  <span className="servings">
                    <FaBowlFood />
                    <span>
                      Calorias por porção - {recipe.caloriesPerServing} kcal
                    </span>
                  </span>
                </div>
              </div>
              <div className="container-bottom">
                <div className="container-meal-type">
                  <span>Tipo da refeição</span>
                  <span>
                    {recipe.mealType.map((value) => {
                      return value;
                    })}
                  </span>
                </div>
                <div className="container-cuisine">
                  <span>Cozinha</span>
                  <span>{recipe.cuisine}</span>
                </div>
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
                <div className="container-tags">
                  <span>Tags: </span>
                  <div className="container-tags-items">
                    {recipe.tags.map((tag) => {
                      return (
                        <span className="tag-item" key={tag}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ContainerRecipe>
          <ContainerIngredients>
            <div className="container-title">
              <h2>Ingredientes</h2>
            </div>
            <div className="ingredients">
              <ul>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <li className="ingredient-item" key={ingredient}>
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          </ContainerIngredients>
          <ContainerInstructions>
            <div className="container-title">
              <h2>Modo de preparo</h2>
            </div>
            <div className="instructions">
              <ol>
                {recipe.instructions.map((instruction) => {
                  return (
                    <li className="instruction-item" key={instruction}>
                      <span>{instruction}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </ContainerInstructions>
        </ContainerWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
}
