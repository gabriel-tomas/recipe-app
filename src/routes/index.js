import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import Search from '../pages/Search';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/recipe/:id/" component={Recipe} />
      <MyRoute exact path="/search/:item/" component={Search} />
      <MyRoute exact path="/categories" component={Categories} />
      <MyRoute exact path="/category/:item" component={Category} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
