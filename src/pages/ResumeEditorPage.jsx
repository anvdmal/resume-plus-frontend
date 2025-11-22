import React, {useState} from "react";
import {debounce} from 'lodash';
import ResumeForm from "../components/form/ResumeForm.jsx";
import ResumeRenderer from "../components/templates/ResumeRenderer.jsx";
import {demoResumeData} from "../data/demoResumeData.js";
import "../styles/ResumeEditorPage.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const debouncedSetPreview = debounce((data, setState) => {
    setState(data);
}, 300);

export default function ResumeEditorPage() {
    const [resumeData, setResumeData] = useState(demoResumeData);

    const handlePreviewChange = (previewData) => {
        debouncedSetPreview(previewData, setResumeData);
    };

    const handleFormSubmit = (finalData) => {
        console.log('Резюме отправлено:', finalData);
    };

    return (
        <>
            <Header variant="secondary"/>
            <div className="resume-edit-page">
                <div className="resume-edit-page-form">
                    <ResumeForm
                        onPreviewChange={handlePreviewChange}
                        onSubmitForm={handleFormSubmit}
                    />
                </div>
                <div className="resume-edit-page-preview">
                    <ResumeRenderer data={resumeData} template="creative"/>
                </div>
            </div>
            <Footer/>
        </>
    );
}