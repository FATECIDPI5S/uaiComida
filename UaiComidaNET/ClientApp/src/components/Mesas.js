import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Mesas';

class Mesas extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Mesas</h1>

        <p>Aqui você pode cadastrar as mesas disponíveis no estabelecimento.</p>

        <p>Mesas: <strong>{this.props.count}</strong></p>

        <button className="btn btn-primary" onClick={this.props.increment}>Incrementar</button>
      </div>
    )
  }
}

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Mesas);