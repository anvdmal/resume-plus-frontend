import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {resumeSchema} from './schema.js';
import MainButton from '../ui/MainButton.jsx';
import PersonalInfoSection from './sections/PersonalInfoSection.jsx';
import ContactsSection from './sections/ContactsSection.jsx';
import EducationSection from './sections/EducationSection.jsx';
import WorkExperienceSection from './sections/WorkExperienceSection.jsx';
import AdditionalEducationSection from './sections/AdditionalEducationSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import '../../styles/ui/ResumeForm.css';

export default function ResumeForm({onSubmitForm}) {

    const {control, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(resumeSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            desiredPosition: '',
            socialLinks: [{platform: '', link: ''}],
            phone: '',
            email: '',
            telegram: '',
            github: '',
            workExperience: [],
            education: [],
            additionalEducation: [],
            languages: [],
            aboutMe: '',
            professionalSkills: ''
        },
    });

    const onSubmit = (data) => {
        onSubmitForm(data);
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