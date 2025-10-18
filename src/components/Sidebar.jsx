import React from 'react';
import './Sidebar.css';
import Icon from './Icon';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>Resume+</h2>
                <button className="close-btn" onClick={onClose}>
                    ✕
                </button>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <Icon name="ic-home" />
                        Главная
                    </li>
                    <li>
                        <Icon name="ic-file" />
                        Мои резюме
                    </li>
                    <li>
                        <Icon name="ic-cover-letter" />
                        Шаблоны
                    </li>
                    <li>
                        <Icon name="ic-info-circle" />
                        Настройки
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;