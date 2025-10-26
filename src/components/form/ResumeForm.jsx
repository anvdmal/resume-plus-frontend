import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resumeSchema } from './schema.js';
import { demoResumeData } from '../../data/demoResumeData.js';
import { mapFormToResumeData, mapResumeDataToForm } from '../../utils/mapResumeData.jsx';
import MainButton from '../ui/MainButton.jsx';
import PersonalInfoSection from './sections/PersonalInfoSection.jsx';
import ContactsSection from './sections/ContactsSection.jsx';
import EducationSection from './sections/EducationSection.jsx';
import WorkExperienceSection from './sections/WorkExperienceSection.jsx';
import AdditionalEducationSection from './sections/AdditionalEducationSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import '../../styles/ui/ResumeForm.css';

export default function ResumeForm({ onSubmitForm, onPreviewChange }) {
    const defaultValues = useMemo(() => mapResumeDataToForm(demoResumeData), []);

    const { control, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        mode: 'onChange',
        resolver: yupResolver(resumeSchema),
        defaultValues,
    });

    const watchedData = watch();
    const [photoPreview, setPhotoPreview] = useState(demoResumeData.personal.photo || null);

    useEffect(() => {
        const previewData = mapFormToResumeData(watchedData);
        const safePreview = { ...previewData };
        if (photoPreview) {
            safePreview.personal.photo = photoPreview;
        }
        onPreviewChange?.(safePreview);
    }, [watchedData, photoPreview, onPreviewChange]);

    const onSubmit = (data) => {
        const formattedData = mapFormToResumeData(data);
        if (photoPreview) {
            formattedData.personal.photo = photoPreview;
        }
        onSubmitForm?.(formattedData);
    };

    return (
        <div className="resume-page">
            <form onSubmit={handleSubmit(onSubmit)} className="resume-form">
                <PersonalInfoSection
                    control={control}
                    setValue={setValue}
                    setPhotoPreview={setPhotoPreview}
                />
                <ContactsSection control={control} errors={errors} />
                <WorkExperienceSection control={control} errors={errors} />
                <EducationSection control={control} errors={errors} />
                <AdditionalEducationSection control={control} errors={errors} />
                <SkillsSection control={control} errors={errors} />
                <MainButton text="Создать резюме" variant="rose" type="submit" />
            </form>
        </div>
    );
}