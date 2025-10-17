import React from "react";
import "./SocialButton.css";

const SocialButton = ({ icon, text, onClick }) => {
  return (
    <button className="social-button" onClick={onClick}>
      <img src={icon} alt={`Иконка ${text}`} className="social-button-icon" />
      <span className="social-button-text">{text}</span>
    </button>
  );
};

export default SocialButton;
