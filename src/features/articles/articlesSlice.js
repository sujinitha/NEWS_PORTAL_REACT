// src/features/articles/articlesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;
console.log('API Key:', apiKey); // Debugging line

// Async thunk to fetch articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, language = 'en' }) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          category,
          language,
          apiKey,
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching articles:', error); // Debugging line
      throw new Error('Error fetching articles');
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectArticles = (state) => state.articles.articles;

export default articlesSlice.reducer;
