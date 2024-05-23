// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import StoryList from './components/StoryList';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const AppRoutes: React.FC = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path="/" element={isAuthenticated ? <StoryList /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
