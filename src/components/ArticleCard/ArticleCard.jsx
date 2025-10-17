import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ imageUrl, tag, title, description, linkUrl }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <span className="card-tag">{tag}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={linkUrl} className="card-link">
          Подробнее
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.43 5.92999L20.5 12L14.43 18.07"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
