import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route>
                    <h1>404 Página não encontrada</h1>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;
