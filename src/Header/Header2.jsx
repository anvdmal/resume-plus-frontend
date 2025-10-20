import React from 'react';
import './Header2.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src="public\logo-icon.svg" alt="Resume+ Logo" className="logo-icon" />
          <span className="logo-text">Резюме+</span>
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-link">Анализ</a>
          <a href="#" className="nav-link">Вакансии</a>
          <a href="#" className="nav-link">О нас</a>
        </nav>
        <div className="header-actions">
          <button className="action-button">Создать резюме</button>
        </div>
      </div>
    </header>
  );
}