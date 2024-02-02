import React from 'react';
import { IconContext } from 'react-icons';
import { FiSearch, FiHome, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import colors from '../../config/colors';
import { Wrapper, Navigator } from './styled';

export default function Nav() {
  const actualPath = useSelector((state) => state.navPage.navPage);

  const handleClick = () => {
    const input = document.querySelector('.input-search');
    input.classList.toggle('active');
    input.focus();
    document.body.classList.toggle('disabled');
    const nav = document.querySelector('.container-nav');
    nav.classList.toggle('search-active');
  };

  return (
    <Wrapper className="container-nav">
      <Navigator>
        <IconContext.Provider value={{ color: colors.neutral3 }}>
          <button
            onClick={handleClick}
            className={`container-nav-icon button-search ${actualPath === '/search' ? 'actived' : ''}`}
          >
            <FiSearch />
          </button>
          <input className="input-search" type="text" name="" />
          <Link
            to="/"
            className={`container-nav-icon ${actualPath === '/' ? 'actived' : ''}`}
          >
            <FiHome />
          </Link>
          <Link
            to="/categories"
            className={`container-nav-icon ${actualPath === '/categories' ? 'actived' : ''}`}
          >
            <FiGrid />
          </Link>
        </IconContext.Provider>
      </Navigator>
    </Wrapper>
  );
}
