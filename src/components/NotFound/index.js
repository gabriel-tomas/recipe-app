import React from 'react';
import PropTypes from 'prop-types';

import notFound from '../../assets/imgs/notFound.svg';

import { ContainerNotFound } from './styled';

export default function NotFound({ message }) {
  return (
    <ContainerNotFound>
      <h1>{message}</h1>
      <div className="container-img">
        <img src={notFound} alt="Not Found" />
      </div>
    </ContainerNotFound>
  );
}

NotFound.defaultProps = {
  message: '',
};

NotFound.propTypes = {
  message: PropTypes.string,
};
