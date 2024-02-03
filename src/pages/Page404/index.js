import React from 'react';

import { Container404 } from './styled';
import notFound404 from '../../assets/imgs/notFound404.svg';

export default function Page404() {
  return (
    <Container404>
      <h1>Erro 404</h1>
      <p>Essa página não existe</p>
      <div className="container-img">
        <img src={notFound404} alt="Not Found" />
      </div>
    </Container404>
  );
}
