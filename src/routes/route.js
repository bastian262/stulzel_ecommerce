import React from 'react';
import { createBrowserHistory } from 'history';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import CotizadorScreen from '../pages/cotizador/cotizador';
const history = createBrowserHistory();
const AppRouter  = () => {
    return (  
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cotizador" component={ CotizadorScreen } />

            <Redirect to="/" />
        </Switch>
    </Router>
    );
}
 
export default AppRouter;