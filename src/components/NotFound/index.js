import React, { useState } from 'react';
import PropTypes from 'prop-types';

import notFound from '../../assets/imgs/notFound.svg';

import { ContainerNotFound } from './styled';

export default function NotFound({ message, paragraph }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => setImageLoaded(true);
  };

  preloadImage(notFound);

  return imageLoaded ? (
    <ContainerNotFound>
      {paragraph ? (
        <p className="message-paragraph">{message}</p>
      ) : (
        <h1>{message}</h1>
      )}
      <div className="container-img">
        <img src={notFound} alt="Not Found" />
      </div>
    </ContainerNotFound>
  ) : null;
}

NotFound.defaultProps = {
  message: '',
  paragraph: false,
};

NotFound.propTypes = {
  message: PropTypes.string,
  paragraph: PropTypes.bool,
};
