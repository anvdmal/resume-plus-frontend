import React, {useState} from "react";
import InputField from "../components/ui/InputField.jsx";
import MainButton from "../components/ui/MainButton.jsx";
import TextButtonWithIcon from "../components/ui/TextButtonWithIcon.jsx";
import "../styles/pages/SignUpAndInPages.css";
import Header from "../components/ui/Header.jsx";

import googleIcon from "../assets/ic-google.svg";
import hhIcon from "../assets/ic-hh.svg";
import backArrow from "../assets/ic-arrow-left.svg";
import nextArrow from "../assets/ic-arrow-right.svg";
import {Link, useNavigate} from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();

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
            <Header variant="secondary"/>
            <div className="signupin-page">
                <div className="arrow-buttons">
                    <TextButtonWithIcon
                        text="Обратно"
                        icon={backArrow}
                        iconSide="left"
                        color="dark"
                        onClick={() => {
                            return navigate(-1);
                        }}
                    />
                    <Link to="/auth" style={{textDecoration: "none"}}>
                        <TextButtonWithIcon
                            text="Уже есть аккаунт?"
                            icon={nextArrow}
                            iconSide="right"
                            color="tan"
                        />
                    </Link>

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