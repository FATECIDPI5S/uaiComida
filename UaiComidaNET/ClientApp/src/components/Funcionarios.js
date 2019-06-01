import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Funcionarios';

const Funcionarios = props => (
  <div>
    <h1>Funcionários</h1>

    <p>Aqui você pode gerenciar os funcionários da sua equipe.</p>

    <p>Funcionários: <strong>{props.count}</strong></p>

    <button className="btn btn-primary" onClick={props.increment}>Increment</button>
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Funcionarios);
