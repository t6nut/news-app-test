// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import StoryList from './components/StoryList';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const Routes: React.FC = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/login">
                    {isAuthenticated ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/">
                    {isAuthenticated ? <StoryList /> : <Redirect to="/login" />}
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
