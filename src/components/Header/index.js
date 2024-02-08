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
  const [canOpenInput, setCanOpenInput] = useState(true);

  const handleSearch = async (e, btnClick) => {
    const inputSearch = document.querySelector('.input-search');

    let keyUpPress;
    if (e) keyUpPress = e.keyCode === 13;

    if (!e && canOpenInput) inputSearch.classList.toggle('on');
    setTimeout(() => inputSearch.focus(), 100);

    if (canSearch) {
      if (btnClick || keyUpPress) {
        setcanSearch(false);
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
        inputSearch.classList.remove('on');
        history.push(`/search/${searchItemTranslated}`);
        setSearchItem('');
        setCanOpenInput(true);
        return;
      }
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
    setCanOpenInput(false);
  };

  return (
    <Wrapper>
      <ContainerSearch>
        <button
          onClick={() => handleSearch(null, true)}
          className="button-search"
        >
          <GoSearch />
        </button>
        <input
          className="input-search"
          type="text"
          placeholder="Pesquisar"
          onChange={handleSearchChange}
          onKeyUp={(e) => handleSearch(e, false)}
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
