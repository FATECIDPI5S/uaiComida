import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import Login from '../pages/Login';
import Mesas from '../pages/Mesas';

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/mesas" component={Mesas} />
        </Switch>
    </ConnectedRouter>
)

export default Routes;