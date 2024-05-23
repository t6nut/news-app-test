// src/setupTests.ts
import '@testing-library/jest-dom/extend-expect';

// Example test file src/components/__tests__/Login.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Login from '../Login';

test('renders login form', () => {
    render(
        <Provider store={ store } >
        <Login />
    < /Provider>
    );

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/API Token/i)).toBeInTheDocument();
});

test('submits login form', () => {
    render(
        <Provider store={ store } >
        <Login />
    < /Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/API Token/i), { target: { value: 'test-token' } });
    fireEvent.click(screen.getByText(/Login/i));

    expect(store.getState().auth.isAuthenticated).toBe(true);
});
