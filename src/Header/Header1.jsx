import React from 'react';
import './Header1.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src="public\logo-icon.svg" alt="Resume+ Logo" className="logo-icon" />
          <span className="logo-text">Резюме+</span>
        </div>
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
      </div>
    </header>
  );
}