// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    email: string;
    token: string;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    email: '',
    token: '',
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<{ email: string; token: string }>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.email = '';
            state.token = '';
            state.isAuthenticated = false;
        },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
