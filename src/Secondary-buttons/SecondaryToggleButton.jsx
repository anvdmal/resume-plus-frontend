import React from 'react';
import './SecondaryToggleButton.css';

const ToggleButton = ({ isActive, onClick }) => {
  return (
    <button 
      className={`toggle-button ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      Месяц
    </button>
  );
};

export default ToggleButton;