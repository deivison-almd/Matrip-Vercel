import * as React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Create from './CrudGets/create.component';
import Index from './CrudGets/index.component';
import Edit from './CrudGets/edit.component';
// import Home from './CrudGets/home.component';
import { Button } from '@mui/material';

export default function Crud() {
  return (
    <div className="container">
      <nav
        style={{
          margin: 50,
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          height: 100,
          paddingLeft: 50,
          borderRadius: 10,
        }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a href={'/check-in'} style={{ textDecoration: 'none' }}>
                <Button variant="contained">Check-in</Button>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={'/lista-reserva'}
                style={{ textDecoration: 'none', marginLeft: 50 }}
              >
                <Button variant="contained">Lista de Reservas</Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="check-in" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="lista-reserva" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
