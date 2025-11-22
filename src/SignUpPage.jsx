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
        password: "",
        confirmPassword: ""
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
        <div className="signupin-page">
            <div className="arrow-buttons">
                <TextButtonWithIcon
                    text="Обратно"
                    icon={backArrow}
                    iconSide="left"
                    color="dark"
                />
                
                <TextButtonWithIcon
                    text="Уже есть аккаунт?"
                    icon={nextArrow}
                    iconSide="right"
                    color="tan"
                />
            </div>
            <div className="signupin-container">
                <form className="signupin-form">
                    <h2>Создать аккаунт</h2>
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

                        <InputField
                            placeholder="Подтвердите пароль"
                            variant="gray"
                            value={formData.confirmPassword}
                            type="password"
                            onChange={handleInputChange("confirmPassword")}
                        />
                    </div>
                    <MainButton
                        text="Зарегистрироваться"
                        variant="moonstone"
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
                    
 {/*                   { <TextButtonWithIcon
                        text="Войти при помощи LinkedIn"
                        icon={linkedinIcon}
                        iconSide="left"
                        color="dark"
                        bordered={true}
                    />} */}
                </div>
            </div>
        </div>
        </>
    );
}