import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Funcionarios';

class Funcionarios extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Funcionários</h1>

        <p>Aqui você pode gerenciar os funcionários da sua equipe.</p>

        <p>Funcionários: <strong>{this.props.count}</strong></p>

        <button className="btn btn-primary" onClick={this.props.increment}>Increment</button>
      </div>
    )
  }
}

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Funcionarios);