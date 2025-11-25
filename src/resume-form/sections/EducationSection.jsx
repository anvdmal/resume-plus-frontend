import React, { useState, useEffect } from 'react';
import { useFieldArray, Controller } from 'react-hook-form';
import InputField from '../../components/ui/InputField';
import CustomDropdown from '../../components/ui/CustomDropdown.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import AddingButton from '../components/AddingButton.jsx';
import { educationHints } from '../../tips/hints';

const educationLevels = [
  'Среднее общее',
  'Среднее профессиональное',
  'Бакалавриат',
  'Специалитет',
  'Магистратура',
  'Аспирантура',
  'Докторантура',
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i).map(String);

export default function EducationSection({ control, errors }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'education' });

  useEffect(() => {
    if (fields.length === 0) {
      append({ institution: '', specialty: '', endYear: '', level: '' });
    }
  }, [fields.length, append]);

  return (
    <section className="education-section section">
        <SectionHeader 
                iconSrc="src/assets/ic-education.svg" 
                title="Образование" 
                hints={educationHints}
              />
      {fields.map((field, index) => (
        <div key={field.id} className="section-item-transparent">
          <Controller
            name={`education.${index}.institution`}
            control={control}
            render={({ field }) => <InputField placeholder="Учебное заведение" variant="gray" {...field} />}
          />
          {/* {errors.education?.[index]?.institution && <p className="error">{errors.education[index].institution.message}</p>} */}
          <Controller
            name={`education.${index}.specialty`}
            control={control}
            render={({ field }) => <InputField placeholder="Специальность" variant="gray" {...field} />}
          />
          {/* {errors.education?.[index]?.specialty && <p className="error">{errors.education[index].specialty.message}</p>} */}
          <div className="group">
            <div className='dropdown-container'>
          <Controller
            name={`education.${index}.endYear`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomDropdown placeholder="Год окончания" options={years} initialValue={value} onSelect={onChange} />
            )}
          />
          {/* {errors.education?.[index]?.endYear && <p className="error">{errors.education[index].endYear.message}</p>} */}
          </div>
          <div className='dropdown-container'>
          <Controller
            name={`education.${index}.level`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomDropdown placeholder="Уровень образования" options={educationLevels} initialValue={value} onSelect={onChange} />
            )}
          />
          {/* {errors.education?.[index]?.level && <p className="error">{errors.education[index].level.message}</p>} */}
          </div>
          <button className="delete-button" onClick={() => remove(index)}>
            <img src="src/assets/ic-cancel.svg" alt="Remove" className="cancel-icon" />
            </button>
         </div>
        </div>
      ))}
    
    <AddingButton
        text="Добавить учебное заведение"
        onClick={() => append({ institution: '', specialty: '', endYear: '', level: '' })}
    />
    
    </section>
  );
}