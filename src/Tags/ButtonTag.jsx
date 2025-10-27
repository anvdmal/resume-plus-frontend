import React, { useState } from 'react';
import './ButtonTag.css';

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`custom-button ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      Все статьи
    </button>
  );
};

export default Button;