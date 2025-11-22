import React from "react";
import "../../styles/ui/InputField.css";

export default function InputField({ placeholder, variant = "gray", value, onChange }) {
    const className = `input-field ${variant}`;

    return (
        <input
            type="text"
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
