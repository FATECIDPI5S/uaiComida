import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import history from './history';

import Login from '../pages/Login';
import Mesas from '../pages/Mesas';

const Routes = () => (
    <ConnectedRouter history={history}>
    {/* //<BrowserRouter> */}
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/mesas" component={Mesas} />
        </Switch>
    {/* //</BrowserRouter> */}
    </ConnectedRouter>
)

export default Routes;