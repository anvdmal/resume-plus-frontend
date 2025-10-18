import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resumeSchema } from './schema';
import MainButton from '../components/ui/MainButton.jsx';
import PersonalInfoSection from './sections/PersonalInfoSection';
import ContactsSection from './sections/ContactsSection';
import EducationSection from './sections/EducationSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import AdditionalEducationSection from './sections/AdditionalEducationSection';
import SkillsSection from './sections/SkillsSection';
import '../styles/ui/ResumeForm.css';

export default function ResumeForm() {
  const [photoPreview, setPhotoPreview] = useState(null);
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(resumeSchema),
    defaultValues: {
      socialLinks: [{ platform: '', link: '' }],
      phone: '',
      email: '',
      telegram: '',
      github: '',
      workExperience: [],
      education: [],
      additionalEducation: [],
      languages: [],
    },
  });
  

  const onSubmit = (data) => {
    console.log('Данные формы:', data);
  };

  return (
    <div className="resume-page"> 
      <form onSubmit={handleSubmit(onSubmit)} className="resume-form">
        <PersonalInfoSection control={control} errors={errors} setPhotoPreview={setPhotoPreview} />
        <ContactsSection control={control} errors={errors} />
        <WorkExperienceSection control={control} errors={errors} />
        <EducationSection control={control} errors={errors} />
        <AdditionalEducationSection control={control} errors={errors} />
        <SkillsSection control={control} errors={errors} />
        <MainButton text="Создать резюме" variant="rose" />
      </form>
    </div>
  );
}