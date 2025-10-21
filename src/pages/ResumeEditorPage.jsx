import React, { useState } from "react";
import ResumeForm from "../components/form/ResumeForm.jsx";
import ResumeRenderer from "../components/templates/ResumeRenderer.jsx";
import { demoResumeData } from "../data/demoResumeData";
import "../styles/ResumeEditorPage.css";

export default function ResumeEditorPage() {
    const [resumeData, setResumeData] = useState(demoResumeData);

    const handleFormChange = (data) => {
        const formattedData = {
            personal: {
                firstName: data.firstName,
                lastName: data.lastName,
                desiredPosition: data.desiredPosition,
                photo: data.photo || "",
            },
            contacts: {
                phone: data.phone,
                email: data.email,
                social: (data.socialLinks || []).map((s) => ({
                    type: s.platform,
                    link: s.link,
                })),
            },
            experience: data.workExperience || [],
            education: data.education || [],
            additionalEducation: data.additionalEducation || [],
            skills: {
                aboutMe: data.aboutMe || "",
                languages: data.languages || [],
                professionalSkills: data.professionalSkills || "",
            },
        };

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