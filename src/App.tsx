import React from 'react';
import Header from './components/Header/Header';
import './styles/App.scss';
import * as serviceWorker from './pages/Crud/serviceWorker';
import Crud from './pages/Crud/Crud';

function App() {
  return (
    <div className="background">
      <Header />
      <Crud />
    </div>
  );
}

export default App;

serviceWorker.unregister();
