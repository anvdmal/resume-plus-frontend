import React from 'react';
import '../../styles/ui/Header.css';
import MainButton from "./MainButton.jsx";
import SecondaryButton from "./SecondaryButton.jsx";

export default function Header({variant = 'home'}) {
    return (
        <header className={`header header-${variant}`}>
            <div className="header-content">
                <div className="header-logo">
                    <img src="../../../public/logo-icon.svg" alt="Resume+ Logo" className="logo-icon"/>
                    <span className="logo-text">Резюме+</span>
                </div>
                {variant === 'main-screen' && (
                    <div className="header-actions">
                        <SecondaryButton
                            text="Войти"
                            className="sign-in-button"/>
                        <MainButton
                            text="Создать резюме"
                            className="create-resume-button"/>
                    </div>
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