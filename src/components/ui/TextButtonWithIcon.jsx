import React from "react";
import '../../styles/ui/TextButtonWithIcon.css'

export default function TextButtonWithIcon({text, icon, iconSide = "right", onClick}) {
    const className = `text-button ${iconSide}`;

    return (
        <button className={className} type="button" onClick={onClick}>
            {text}
            <img src={icon} alt="dropdown"/>
        </button>
    );
}