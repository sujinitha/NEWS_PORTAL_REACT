// src/reducers.js

import { combineReducers } from 'redux';
import articlesReducer from './features/articles/articlesSlice'; // Adjust the path based on your actual slice location

const rootReducer = combineReducers({
  articles: articlesReducer,
  // Add other reducers here if you have more slices
});

export default rootReducer;
