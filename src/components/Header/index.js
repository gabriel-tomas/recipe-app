import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSearch, GoHome, GoX } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { CiGrid41 } from 'react-icons/ci';
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
        searchFinalItem = searchFinalItem.trim();
        inputSearch.classList.remove('on');
        history.push(`/search/${encodeURIComponent(searchFinalItem)}`);
        setSearchItem('');
        setCanOpenInput(true);
        return;
      }
    }
  };

  const handleMenu = () => {
    const menu = document.querySelector('.container-menu');
    const backBlocker = document.querySelector('.back-blocker');
    const body = document.body;

    menu.classList.add('on');
    backBlocker.classList.add('active-menu');
    body.classList.add('disabled');

    const backBlockerExitMenu = () => {
      menu.classList.remove('on');
      backBlocker.classList.remove('active-menu');
      body.classList.remove('disabled');
      backBlocker.removeEventListener('click', backBlockerExitMenu);
    };

    if (backBlocker.classList.contains('active-menu')) {
      backBlocker.addEventListener('click', backBlockerExitMenu);
    }

    document.querySelectorAll('.container-menu > a').forEach((link) =>
      link.addEventListener('click', () => {
        menu.classList.remove('on');
        backBlocker.classList.remove('active-menu');
        body.classList.remove('disabled');
      }),
    );
  };

  const handleExitMenu = () => {
    const menu = document.querySelector('.container-menu');
    const backBlocker = document.querySelector('.back-blocker');
    const body = document.body;

    menu.classList.remove('on');
    backBlocker.classList.remove('active-menu');
    body.classList.remove('disabled');
  };

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
    if (!e.target.value.trim()) {
      setcanSearch(false);
      setCanOpenInput(true);
      return;
    }
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
          <button onClick={handleExitMenu} className="exit-menu">
            <GoX />
          </button>
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
