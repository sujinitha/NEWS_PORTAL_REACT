// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ArticlesList from './components/ArticlesList/ArticlesList';
import DetailedArticleView from './components/DetailedArticleView/DetailedArticleView';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {
  const [category, setCategory] = useState('general');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar categories={['general', 'business', 'technology', 'entertainment']} onCategoryChange={handleCategoryChange} />
        <Routes>
          <Route exact path="/" element={<ArticlesList category={category} />} />
          <Route path="/article/:index" element={<DetailedArticleView />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
