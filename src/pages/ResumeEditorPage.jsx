import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {debounce} from 'lodash';
import ResumeForm from "../components/form/ResumeForm.jsx";
import ResumeRenderer from "../components/templates/ResumeRenderer.jsx";
import {demoResumeData} from "../demo-data/demoResumeData.js";
import "../styles/pages/ResumeEditorPage.css";
import Header from "../components/ui/Header.jsx";
import Footer from "../components/ui/Footer.jsx";

const debouncedSetPreview = debounce((data, setState) => {
    setState(data);
}, 300);

export default function ResumeEditorPage() {
    const {template: urlTemplate} = useParams();
    const navigate = useNavigate();

    const [resumeData, setResumeData] = useState(demoResumeData);

    const selectedTemplate = urlTemplate && ["modern", "classic", "creative"].includes(urlTemplate)
        ? urlTemplate
        : "modern";

    useEffect(() => {
        if (!urlTemplate) {
            navigate("/edit/modern", {replace: true});
        }
    }, [urlTemplate, navigate]);

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
                    <ResumeRenderer
                        data={resumeData}
                        template={selectedTemplate}
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}