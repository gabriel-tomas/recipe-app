import React from 'react';
import { IconContext } from 'react-icons';
import { FiSearch, FiHome, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import colors from '../../config/colors';
import { Wrapper, Navigator } from './styled';

export default function Nav() {
  const actualPath = useSelector((state) => state.navPage.navPage);

  return (
    <Wrapper>
      <Navigator>
        <IconContext.Provider value={{ color: colors.neutral3 }}>
          <Link
            to="/search"
            className={`container-nav-icon ${actualPath === '/search' ? 'actived' : ''}`}
          >
            <FiSearch />
          </Link>
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
