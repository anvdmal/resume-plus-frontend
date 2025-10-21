import React from "react";
import "../../styles/ui/MainButton.css";

export default function MainButton({ text, onClick, variant = "tan" }) {
    const classMap = {
        tan: "btn-tan",
        moonstone: "btn-moonstone",
        rose: "btn-rose",
        vanilla: "btn-vanilla",
    };

    const className = `main-button ${classMap[variant] || classMap.tan}`;
    
    return (
        <button className={className} type="button" onClick={onClick}>
            {text}
        </button>
    );
}