// src/components/Login.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/slices/authSlice';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setAuth({ email, token }));
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>API Token:</label>
                    <input type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Get your API token from <a href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    );
};

export default Login;
