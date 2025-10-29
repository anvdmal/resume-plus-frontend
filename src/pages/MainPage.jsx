import Header from "../components/Header.jsx";
import LetsCreateResumeSection from "../components/main_sections/LetsCreateResumeSection.jsx";
import TemplatesPreviewSection from "../components/main_sections/TemplatesPreviewSection.jsx";
import AiResumeSection from "../components/main_sections/AiResumeSection.jsx";
import React from "react";
import CreationStagesSection from "../components/main_sections/CreationStagesSection.jsx";

export default function MainPage() {
    return (
        <div>
            <Header variant="main-screen"/>
            <LetsCreateResumeSection/>
            <AiResumeSection />
            <TemplatesPreviewSection/>
            <CreationStagesSection/>
        </div>
    )
}