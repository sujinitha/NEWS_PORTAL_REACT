import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Use environment variable for API key
const baseUrl = 'https://newsapi.org/v2/top-headlines';

// Async thunk to fetch articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (category) => {
    try {
      const response = await axios.get(`${baseUrl}?category=${category}&language=en&apiKey=${apiKey}`);
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching articles:', error.message);
      throw Error('Error fetching articles');
    }
  }
);

// Slice creation
const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Add reducers if needed
  },
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

export default articlesSlice.reducer;
