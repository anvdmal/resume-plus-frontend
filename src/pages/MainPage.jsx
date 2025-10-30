import React from "react";
import Header from "../components/Header.jsx";
import LetsCreateResumeSection from "../components/main_sections/LetsCreateResumeSection.jsx";
import AiResumeSection from "../components/main_sections/AiResumeSection.jsx";
import CreationStagesSection from "../components/main_sections/CreationStagesSection.jsx";
import TemplatesPreviewSection from "../components/main_sections/TemplatesPreviewSection.jsx";
import "../styles/MainPage.css"
import Footer from "../components/Footer.jsx";

export default function MainPage() {
    return (
        <div className={"main-page"}>
            <Header variant="main-screen"/>
            <LetsCreateResumeSection/>
            <AiResumeSection />
            <TemplatesPreviewSection/>
            <CreationStagesSection/>
            <Footer/>
        </div>
    )
}