import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch, GoHome } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { CiGrid41 } from 'react-icons/ci';

import Wrapper, {
  ContainerSearch,
  ContainerNav,
  ContainerMenu,
} from './styled';

export default function Header() {
  const handleSearch = () => {
    const inputSearch = document.querySelector('.input-search');

    inputSearch.classList.toggle('on');
  };

  const handleMenu = () => {
    const menu = document.querySelector('.container-menu');

    menu.classList.toggle('on');
    document
      .querySelectorAll('.container-menu > a')
      .forEach((link) =>
        link.addEventListener('click', () => menu.classList.remove('on')),
      );
  };

  return (
    <Wrapper>
      <ContainerSearch>
        <button onClick={handleSearch} className="button-search">
          <GoSearch />
        </button>
        <input className="input-search" type="text" placeholder="Pesquisar" />
      </ContainerSearch>
      <ContainerMenu>
        <button onClick={handleMenu} className="button-menu">
          <IoIosMenu />
        </button>
        <div className="container-menu">
          <Link to="/">
            <span>Home</span>
            <GoHome />
          </Link>
          <Link to="/categories">
            <span>Categorias</span>
            <CiGrid41 />
          </Link>
        </div>
      </ContainerMenu>
      <ContainerNav>
        <Link to="/">
          <GoHome />
          <span>Home</span>
        </Link>
        <Link to="/categories">
          <CiGrid41 />
          <span>Categorias</span>
        </Link>
      </ContainerNav>
    </Wrapper>
  );
}
