import React from 'react';
import './Header3.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src="public\logo-icon.svg" alt="Resume+ Logo" className="logo-icon" />
          <span className="logo-text">Резюме+</span>
        </div>
      </div>
    </header>
  );
}