import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// importando minhas páginas
import Main from './pages/Main';
import Repository from './pages/Repository';

// Switch => garante que uma rota seja chamada por momento

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
