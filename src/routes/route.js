import React from 'react';
import { createBrowserHistory } from 'history';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home';
const history = createBrowserHistory();
const AppRouter  = () => {
    return (  
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={ Home } />

            <Redirect to="/" />
        </Switch>
    </Router>
    );
}
 
export default AppRouter;