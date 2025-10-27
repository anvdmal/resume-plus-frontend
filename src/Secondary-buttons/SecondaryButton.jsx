import React from 'react';
import './SecondaryButton.css'; 

const ButtonComponent = ({ onClick }) => {
  return (
    <div className="button-component">
      <button className="custom-button" onClick={onClick}>
        Войти
      </button>
    </div>
  );
};

export default ButtonComponent;