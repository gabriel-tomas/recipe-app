import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegClock, FaUserFriends, FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { PiBowlFoodFill } from 'react-icons/pi';
import { ContainerRecipes } from './styled';

export default function Recipes({ items }) {
  const [recipeImage, setRecipeImage] = useState(false);

  const mealDifficultys = {
    easy: 'Fácil',
    medium: 'Moderado',
    hard: 'Dificíl',
  };

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(url);
      image.onerror = (error) => reject(error);
      image.src = url;
    });
  }

  const imageLoad = (url) => {
    loadImage(url)
      .then(() => {
        setRecipeImage(true);
      })
      .catch(() => {
        setRecipeImage(false);
      });
  };

  return (
    <ContainerRecipes>
      {items.length > 0
        ? items.map((item) => {
            imageLoad(item.image);
            return (
              <Link
                className="recipe-item"
                key={item.id}
                to={`recipe/${item.id}`}
              >
                <div className="container-img">
                  {recipeImage ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <IconContext.Provider
                      value={{
                        color: '#919191',
                        size: 50,
                      }}
                    >
                      <div className="container-svg">
                        <PiBowlFoodFill />
                      </div>
                    </IconContext.Provider>
                  )}
                </div>
                <div className="container-bottom">
                  <h1>{item.name}</h1>
                  <div className="container-meal-info">
                    <span className="cook">
                      <FaRegClock />
                      <span>Cozimento - {item.cookTimeMinutes} min</span>
                    </span>
                    <span className="prep">
                      <FaRegClock />
                      <span>Preparamento - {item.prepTimeMinutes} min</span>
                    </span>
                    <span className="servings">
                      <FaUserFriends />
                      <span>Serve - {item.servings} pessoas</span>
                    </span>
                    <div className="container-difficulty-rating">
                      <span>
                        Dificuldade -{' '}
                        {mealDifficultys[item.difficulty.toLowerCase()]}
                      </span>
                      <span className="rating">
                        <FaStar />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </ContainerRecipes>
  );
}

Recipes.defautProps = {
  items: {},
};

Recipes.propTypes = {
  items: PropTypes.instanceOf(Object),
};
