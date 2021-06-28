import React from 'react';
import { createBrowserHistory } from 'history';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import CotizadorScreen from '../pages/cotizador/cotizador';
import HomeScreen from '../pages/home';
import SignUpScreen from '../pages/signUp/SignUp';
import DashboardScreen from '../pages/dashboard/dashboard';
const history = createBrowserHistory();
const AppRouter  = () => {
    return (  
    <Router history={history}>
        <Switch>
            <Route  exact path="/" component={ HomeScreen } />
            <Route exact path="/cotizador" component={ CotizadorScreen } />
            <Route exact path="/signUp" component={ SignUpScreen } />
            <Route exact path="/dashboard" component={ DashboardScreen } />

            <Redirect to="/" />
        </Switch>
    </Router>
    );
}
 
export default AppRouter;