import React, { useState } from 'react';
import './Sidebar.css';

import HomeIcon from '../../assets/ic-home.svg?raw';
import FileIcon from '../../assets/ic-file.svg?raw';
import SearchIcon from '../../assets/ic-search.svg?raw';

import UpgradeCard from '../upgrade-card/UpgradeCard';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'home': return HomeIcon;
            case 'files': return FileIcon;
            case 'search': return SearchIcon;
            default: return '';
        }
    };

    const renderNavItem = (id, title, iconName) => (
        <button
            className={`nav-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
        >
            <img
                src={`data:image/svg+xml;charset=utf8,${encodeURIComponent(getIcon(iconName))}`}
                alt={title}
                className="nav-icon"
            />
            {title}
        </button>
    );

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src="/logo-icon.svg" alt="Логотип Resume+" className="logo-icon" />
                <h2 className="app-title">Резюме+</h2>
            </div>

            <div className="user-info">
                <img src="https://via.placeholder.com/56" alt="Аватар пользователя" className="avatar" />
                <div className="user-details">
                    <span className="user-label">Мой аккаунт</span>
                    <span className="user-name">Имя Фамилия</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                {renderNavItem('home', 'Главная', 'home')}
                {renderNavItem('files', 'Мои файлы', 'files')}
                {renderNavItem('search', 'Поиск работы', 'search')}
            </nav>

            {}
            <div className="sidebar-upgrade-section">
                <UpgradeCard />
            </div>
        </aside>
    );
};

export default Sidebar;