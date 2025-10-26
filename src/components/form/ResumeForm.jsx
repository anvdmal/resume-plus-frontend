import React, {useEffect, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {resumeSchema} from './schema.js';
import {demoResumeData} from '../../data/demoResumeData.js';
import {mapFormToResumeData, mapResumeDataToForm} from '../../utils/mapResumeData.jsx';
import MainButton from '../ui/MainButton.jsx';
import PersonalInfoSection from './sections/PersonalInfoSection.jsx';
import ContactsSection from './sections/ContactsSection.jsx';
import EducationSection from './sections/EducationSection.jsx';
import WorkExperienceSection from './sections/WorkExperienceSection.jsx';
import AdditionalEducationSection from './sections/AdditionalEducationSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import '../../styles/ui/ResumeForm.css';

export default function ResumeForm({onSubmitForm}) {
    const {control, handleSubmit, formState: {errors}, watch} = useForm({
        mode: 'onChange',
        resolver: yupResolver(resumeSchema),
        defaultValues: mapResumeDataToForm(demoResumeData),
    });

    const watchedData = watch();
    const prevWatchedDataRef = useRef(watchedData);

    useEffect(() => {
        const hasChanges = JSON.stringify(watchedData) !== JSON.stringify(prevWatchedDataRef.current);
        const hasValues = Object.values(watchedData).some(
            (value) => value !== '' && value !== null && value !== undefined
        );

        if (hasChanges && hasValues && onSubmitForm) {
            console.log('watchedData:', watchedData); // Для отладки
            const formattedData = mapFormToResumeData(watchedData);
            onSubmitForm(formattedData);
            prevWatchedDataRef.current = watchedData;
        }
    }, [watchedData, onSubmitForm]);

    const onSubmit = (data) => {
        console.log('onSubmit:', data);
        if (onSubmitForm) {
            const formattedData = mapFormToResumeData(data);
            onSubmitForm(formattedData);
        }
    };

    return (
        <div className="resume-page">
            <form onSubmit={handleSubmit(onSubmit)} className="resume-form">
                <PersonalInfoSection control={control} errors={errors}/>
                <ContactsSection control={control} errors={errors}/>
                <WorkExperienceSection control={control} errors={errors}/>
                <EducationSection control={control} errors={errors}/>
                <AdditionalEducationSection control={control} errors={errors}/>
                <SkillsSection control={control} errors={errors}/>
                <MainButton text="Создать резюме" variant="rose"/>
            </form>
        </div>
    );
}