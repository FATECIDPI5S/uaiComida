import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Ambientes from './components/Ambientes';
import Mesas from './components/Mesas';
import Funcionarios from './components/Funcionarios';
import FetchData from './components/FetchData';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/ambientes' component={Ambientes} />
    <Route path='/mesas' component={Mesas} />
    <Route path='/funcionarios' component={Funcionarios} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
  </Layout>
);