import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/recipe/:id/" component={Recipe} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
