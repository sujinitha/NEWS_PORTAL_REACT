// src/components/DetailedArticleView/DetailedArticleView.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DetailedArticleView.css';

const DetailedArticleView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  return (
    <div className="detailed-article">
      {article ? (
        <>
          <button onClick={() => navigate(-1)} className="back-button">Back</button>
          <h1>{article.title}</h1>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
          <p>{article.content}</p>
        </>
      ) : (
        <p>Error fetching the article</p>
      )}
    </div>
  );
};

export default DetailedArticleView;
