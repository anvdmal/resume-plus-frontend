import React from 'react';
import './UpgradeCard.css';
import MainButton from '../core-components/MainButton';

const UpgradeCard = () => {
    const handleUpgradeClick = () => {
        alert('Клик по кнопке "Прокачать резюме"');
    };

    return (
        <div className="upgrade-card">
            <p className="upgrade-text">Сейчас: бесплатная подписка</p>
            <MainButton text="Прокачать резюме" onClick={handleUpgradeClick} variant="vanilla" />
        </div>
    );
};

export default UpgradeCard;