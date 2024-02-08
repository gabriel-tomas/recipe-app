import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSearch, GoHome } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { CiGrid41 } from 'react-icons/ci';
import { translator } from '../../services/axios';
import history from '../../services/history';

import Wrapper, {
  ContainerSearch,
  ContainerNav,
  ContainerMenu,
} from './styled';

export default function Header() {
  const [searchItem, setSearchItem] = useState('');
  const [canSearch, setcanSearch] = useState(false);

  const handleSearch = async () => {
    const inputSearch = document.querySelector('.input-search');

    inputSearch.classList.toggle('on');
    if (canSearch) {
      history.location.pathname.replace('/search/', '');
      if (searchItem.length > 500) {
        var searchFinalItem = searchItem.slice(0, 500);
      } else {
        searchFinalItem = searchItem;
      }
      let searchItemTranslated = await translator(
        searchFinalItem,
        'phrase',
        'pt',
        'en',
      );
      history.push(`/search/${searchItemTranslated}`);
      setcanSearch(false);
      setSearchItem('');
      return;
    }
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

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
    if (!e.target.value) return;
    setcanSearch(true);
  };

  return (
    <Wrapper>
      <ContainerSearch>
        <button onClick={handleSearch} className="button-search">
          <GoSearch />
        </button>
        <input
          className="input-search"
          type="text"
          placeholder="Pesquisar"
          onChange={handleSearchChange}
          value={searchItem}
        />
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
