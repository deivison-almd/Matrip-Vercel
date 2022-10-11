import React, { Component } from 'react';
import api from '../../services/Api';

class Filter extends Component {
  state = {
    estadoUF: [],
  };

  async componentDidMount() {
    const response = await api.get('/states');

    this.setState({ estadosUF: response.data });
  }

  render() {
    const { estadoUF } = this.state;

    return (
      <div>
        <h1>Listar os Estados</h1>
        {estadoUF.map((estado: any) => (
          <li key={estado.show.id}>
            <h2>{estado.show.name}</h2>
          </li>
        ))}
      </div>
    );
  }
}

export default Filter;
