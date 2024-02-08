import React, { useState } from 'react';

import { Container404 } from './styled';
import notFound404 from '../../assets/imgs/notFound404.svg';

export default function Page404() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => setImageLoaded(true);
  };

  preloadImage(notFound404);

  return imageLoaded ? (
    <Container404>
      <h1>Erro 404</h1>
      <p>Essa página não existe</p>
      <div className="container-img">
        <img src={notFound404} alt="Not Found" />
      </div>
    </Container404>
  ) : null;
}
