import React, { useState } from "react";
import ResumeForm from "../components/form/ResumeForm.jsx";
import ResumeRenderer from "../components/templates/ResumeRenderer.jsx";
import { demoResumeData } from "../data/demoResumeData.js";
import { mapFormToResumeData } from "../utils/mapResumeData.jsx";
import "../styles/ResumeEditorPage.css";

export default function ResumeEditorPage() {
    const [resumeData, setResumeData] = useState(demoResumeData);

    const handleFormChange = (formData) => {
        const formattedData = mapFormToResumeData(formData);
        setResumeData(formattedData);
    };

    return (
        <div className="resume-edit-page">
            <div className="resume-edit-page-form">
                <ResumeForm onSubmitForm={handleFormChange} />
            </div>

            <div className="resume-edit-page-preview">
                <ResumeRenderer data={resumeData} template="modern" />
            </div>
        </div>
    );
}
