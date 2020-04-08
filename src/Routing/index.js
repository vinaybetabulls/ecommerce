import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from "react-redux";

import Login from '../Components/Login';
import Registration from '../Components/Registration';
import Dashboard from '../Components/Dashboard'

import configureStore from "../store";
const store = configureStore();

export default function AppRouting() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/registration' component={Registration} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
            </Router>
        </Provider>
    )
}