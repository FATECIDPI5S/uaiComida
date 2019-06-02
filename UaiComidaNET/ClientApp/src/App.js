import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import Layout from './components/Layout';
import Login from './components/Login';
import Home from './components/Home';
import Ambientes from './components/Ambientes';
import Mesas from './components/Mesas';
import Funcionarios from './components/Funcionarios';
import FetchData from './components/FetchData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/App';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {!this.props.logged &&
          <Route exact path='/' component={Login} />
        }
        {this.props.logged &&
          <Layout>
            <Route path='/home' component={Home} />
            <Route path='/ambientes' component={Ambientes} />
            <Route path='/mesas' component={Mesas} />
            <Route path='/funcionarios' component={Funcionarios} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
          </Layout>
        }
      </div>
    )
  }
}

export default connect(
  state => (
    state.logger
  ),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);