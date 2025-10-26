import React, {useState, useRef} from "react";
import {debounce} from 'lodash';
import ResumeForm from "../components/form/ResumeForm.jsx";
import ResumeRenderer from "../components/templates/ResumeRenderer.jsx";
import {demoResumeData} from "../data/demoResumeData.js";
import {mapFormToResumeData} from "../utils/mapResumeData.jsx";
import "../styles/ResumeEditorPage.css";

const debouncedHandleFormChange = debounce((formData, prevDataRef, setResumeData) => {
    const formattedData = mapFormToResumeData(formData);
    const prevData = prevDataRef.current;
    if (JSON.stringify(prevData) !== JSON.stringify(formattedData)) {
        prevDataRef.current = formattedData;
        setResumeData(formattedData);
    }
}, 300);

export default function ResumeEditorPage() {
    const [resumeData, setResumeData] = useState(demoResumeData);
    const prevDataRef = useRef(resumeData);

    const handleFormChange = (formData) => {
        debouncedHandleFormChange(formData, prevDataRef, setResumeData);
    };

    console.log('Current resumeData:', resumeData);

    return (
        <div className="resume-edit-page">
            <div className="resume-edit-page-form">
                <ResumeForm onSubmitForm={handleFormChange}/>
            </div>
            <div className="resume-edit-page-preview">
                <ResumeRenderer data={resumeData} template="modern"/>
            </div>
        </div>
    );
}