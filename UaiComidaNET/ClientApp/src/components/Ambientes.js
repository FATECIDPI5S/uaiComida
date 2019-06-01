import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Ambientes';

class Ambientes extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Ambientes</h1>

        <p>Aqui você pode gerenciar os ambientes existentes no seu estabelecimento.
        <br />
          <a style={{ fontWeight: 'lighter', fontSize: 14 }}>Exemplo: hall de entrada, área externa, piso superior, etc.</a>
        </p>

        <p>Mesas: <strong>{props.count}</strong></p>

        <button className="btn btn-primary" onClick={props.increment}>Incrementar</button>
      </div>
    )
  }
}

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Ambientes);