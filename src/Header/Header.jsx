import React from 'react';
import './Header.css';

export default function Header({ variant = 'home' }) {
  return (
    <header className={`header header-${variant}`}>
      <div className="header-content">
        <div className="header-logo">
          <img src="public/logo-icon.svg" alt="Resume+ Logo" className="logo-icon" />
          <span className="logo-text">Резюме+</span>
        </div>
        {variant === 'main-screen' && (
          <>
            <nav className="header-nav">
              <a href="#" className="nav-link">
                Резюме <span className="dropdown-arrow">▼</span>
              </a>
              <a href="#" className="nav-link">
                Полезное <span className="dropdown-arrow">▼</span>
              </a>
              <a href="#" className="nav-link">
                Блог <span className="dropdown-arrow">▼</span>
              </a>
            </nav>
            <div className="header-actions">
              <a href="#" className="action-link">Войти</a>
              <button className="action-button">Создать резюме</button>
            </div>
          </>
        )}
        {variant === 'articles-screen' && (
          <>
            <nav className="header-nav">
              <a href="#" className="nav-link">Анализ</a>
              <a href="#" className="nav-link">Вакансии</a>
              <a href="#" className="nav-link">О нас</a>
            </nav>
            <div className="header-actions">
              <button className="action-button">Создать резюме</button>
            </div>
          </>
        )}
        {variant === 'empty' && null}
      </div>
    </header>
  );
}