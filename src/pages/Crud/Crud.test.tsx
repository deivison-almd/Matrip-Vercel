import React from 'react';
import ReactDOM from 'react-dom';
import Crud from './Crud';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Crud />, div);
  ReactDOM.unmountComponentAtNode(div);
});
