import React from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/navPage/actions';

export default function Page404() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.navPagePath(''));
  }, []);

  return (
    <div>
      <h1>Erro 404</h1>
      <p>Essa página não existe</p>
    </div>
  );
}
