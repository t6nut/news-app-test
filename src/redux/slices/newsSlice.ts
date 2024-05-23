// src/redux/slices/newsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface NewsState {
    news: Array<{ title: string; description: string; url: string }>;
    loading: boolean;
    error: string | null;
}

const initialState: NewsState = {
    news: [],
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async (token: string) => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.articles;
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.news = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch news';
            });
    },
});

export default newsSlice.reducer;
