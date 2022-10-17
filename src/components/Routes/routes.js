// import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import Sobre from './Sobre';
import Usuario from './Usuario';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route component={Sobre} path="/sobre" />
      <Route component={Usuario} path="/usuario" />
    </BrowserRouter>
  );
};

export default Routes;
