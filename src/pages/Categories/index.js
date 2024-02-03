import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categoriesImgs from '../../assets/categoriesImgs/imgs';

import axios from '../../services/axios';
import { toast } from 'react-toastify';

import { ContainerCategories, ContainerItems, Title } from './styled';

export default function Categories() {
  const [categories, setCategories] = useState(false);

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
            return (
              <Link
                className="container-category"
                key={category}
                to={`/category/${category}`}
              >
                <div className="container-img">
                  <img src={categoriesImgs[i]} alt={category} />
                </div>
                <h2>{category}</h2>
              </Link>
            );
          })}
        </ContainerItems>
      ) : null}
    </ContainerCategories>
  );
}
