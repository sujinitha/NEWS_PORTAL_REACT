// src/components/ArticlesList/ArticlesList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../features/articles/articlesSlice';
import { Link } from 'react-router-dom';
import './ArticlesList.css';

const ArticlesList = ({ category }) => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(category));
  }, [category, dispatch]);

  return (
    <div className="articles-list">
      {status === 'loading' && <p>Loading articles...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="article">
            <img src={article.urlToImage} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link
              to={`/article/${index}`}
              state={{ article }}
              className="read-more"
            >
              Read more
            </Link>
          </div>
        ))
      ) : (
        <p>No articles found for this category.</p>
      )}
    </div>
  );
};

export default ArticlesList;
