import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { PiBowlFoodFill } from 'react-icons/pi';
import categoriesImgs from '../../assets/categoriesImgs/imgs';

import axios from '../../services/axios';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';

import { ContainerCategories, ContainerItems, Title } from './styled';

export default function Categories() {
  const [categories, setCategories] = useState(false);
  const [recipeImage, setRecipeImage] = useState(false);

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

  React.useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get('/recipes/tags');
        if (response.status !== 200) {
          setCategories(false);
          return;
        }
        setCategories(response.data);
      } catch (e) {
        setCategories('error');
        if (e.code === 'ERR_NETWORK') {
          toast.error('Conecte-se a internet');
          return;
        }
        toast.error('Erro desconhecido');
      }
    }
    getCategories();
  }, []);

  return (
    <ContainerCategories style={{ marginTop: `2rem` }}>
      <Title>Categorias</Title>
      {categories.length > 0 ? (
        <ContainerItems>
          {categories.map((category, i) => {
            imageLoad(categoriesImgs[i]);
            return (
              <Link
                className="container-category"
                key={category}
                to={`/category/${category}`}
              >
                <div className="container-img">
                  {recipeImage ? (
                    <img src={categoriesImgs[i]} alt={category} />
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
                <h2>{category}</h2>
              </Link>
            );
          })}
        </ContainerItems>
      ) : (
        <Loading />
      )}
    </ContainerCategories>
  );
}
