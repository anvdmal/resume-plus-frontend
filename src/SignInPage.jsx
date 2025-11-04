import React, { useState } from "react";
import InputField from "./components/ui/InputField";
import MainButton from "./components/ui/MainButton";
import TextButtonWithIcon from "./components/ui/TextButtonWithIcon";
import "./styles/SignUpAndInPages.css";
import Header from "./components/Header";

import googleIcon from "./assets/ic-google.svg";
import hhIcon from "./assets/ic-hh.svg";
import linkedinIcon from "./assets/ic-linkedIn.svg";
import backArrow from "./assets/ic-arrow-left.svg";
import nextArrow from "./assets/ic-arrow-right.svg";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    return (
        <>
        <Header variant="secondary" />
        <div className="signup-page">
            <div className="arrow-buttons">
                <TextButtonWithIcon
                    text="Обратно"
                    icon={backArrow}
                    iconSide="left"
                    color="dark"
                />
                
                <TextButtonWithIcon
                    text="Еще нет аккаунта?"
                    icon={nextArrow}
                    iconSide="right"
                    color="tan"
                />
            </div>
            <div className="signup-container">
                <form className="signup-form">
                    <h2>Войти</h2>
                    <div className="input-fields">
                        <InputField
                            placeholder="Электронная почта"
                            variant="gray"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                        />
                        <InputField
                            placeholder="Пароль"
                            variant="gray"
                            value={formData.password}
                            type="password"
                            onChange={handleInputChange("password")}
                        />
                    </div>
                    <MainButton
                        text="Войти"
                        variant="tan"
                        type="submit"
                    />
                </form>

                <div className="social-login">
                    <h2>или</h2>

                    <TextButtonWithIcon
                        text="Войти при помощи Google"
                        icon={googleIcon}
                        iconSide="left"
                        color="dark"
                        bordered={true}
                    />
                    
                    <TextButtonWithIcon
                        text="Войти при помощи Hh"
                        icon={hhIcon}
                        iconSide="left"
                        color="dark"
                        bordered={true}
                    />
                    
                    <TextButtonWithIcon
                        text="Войти при помощи LinkedIn"
                        icon={linkedinIcon}
                        iconSide="left"
                        color="dark"
                        bordered={true}
                    />
                </div>
            </div>
        </div>
        </>
    );
}