import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink as RouterNavLink } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Bem-vindo!</h1>
        <p>Seja bem vindo ao painel de gerenciamento do seu estabelecimento.
      <br />
          Aqui você encontrará funcionalidades importantes:</p>
        <ul>
          <li><RouterNavLink to="/ambientes">Ambientes</RouterNavLink></li>
          <li><RouterNavLink to="/mesas">Mesas</RouterNavLink></li>
          <li><RouterNavLink to="/funcionarios">Funcionários</RouterNavLink></li>
        </ul>
      </div>
    )
  }
}

export default connect()(Home);