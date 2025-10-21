import React, { useState, useEffect } from 'react';
import { useFieldArray, Controller, useWatch } from 'react-hook-form';
import InputField from '../../components/ui/InputField';
import TextArea from '../../components/ui/TextArea';
import MainButton from '../../components/ui/MainButton';
import OptionButtonReversed from '../components/OptionButtonReversed';
import DatePickerField from '../components/DatePickerField';
import SectionHeader from '../components/SectionHeader';
import AddingButton from '../components/AddingButton';


function WorkExperienceItem({ control, errors, index, onRemove }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => setIsOpen(!isOpen);

  const companyValue = useWatch({
    control,
    name: `workExperience.${index}.company`,
    defaultValue: '',
  });

  return (
    <div className="section-item-white">
      <div className="inner-section-header" onClick={toggleSection}>
        <div className="header-with-button">
          <OptionButtonReversed
            onClick={toggleSection}
            isOpen={isOpen}
          />
          <h3>{companyValue || 'Компания'}</h3>
        </div>
        <button 
          className="delete-button" 
          onClick={(e) => {
            e.stopPropagation(); // Останавливаем всплытие
            onRemove();
          }}
        >
          <img src="src/assets/ic-cancel.svg" alt="Remove" className="cancel-icon" />
        </button>
      </div>
      {isOpen && (
        <div className="work-content">
          <div className="group">
            <Controller
              name={`workExperience.${index}.company`}
              control={control}
              render={({ field }) => <InputField placeholder="Компания" variant="gray" {...field} />}
            />
           {/*  {errors.workExperience?.[index]?.company && <p className="error">{errors.workExperience[index].company.message}</p>} */}
            
            <Controller
              name={`workExperience.${index}.position`}
              control={control}
              render={({ field }) => <InputField placeholder="Должность" variant="gray" {...field} />}
            />
           {/*  {errors.workExperience?.[index]?.position && <p className="error">{errors.workExperience[index].position.message}</p>} */}
          </div>
          <div className="group">
            <Controller
              name={`workExperience.${index}.country`}
              control={control}
              render={({ field }) => <InputField placeholder="Страна" variant="gray" {...field} />}
            />
            {/* {errors.workExperience?.[index]?.country && <p className="error">{errors.workExperience[index].country.message}</p>} */}
            <Controller
              name={`workExperience.${index}.city`}
              control={control}
              render={({ field }) => <InputField placeholder="Город" variant="gray" {...field} />}
            />
            {/* {errors.workExperience?.[index]?.city && <p className="error">{errors.workExperience[index].city.message}</p>} */}
          </div>
          
          <div className="group">
            <DatePickerField
              name={`workExperience.${index}.startDate`}
              control={control}
              errors={errors.workExperience?.[index]}
              placeholderText="Дата трудоустройства"
              maxDate={new Date()}
            />
            <DatePickerField
              name={`workExperience.${index}.endDate`}
              control={control}
              errors={errors.workExperience?.[index]}
              placeholderText="Дата увольнения"
              maxDate={new Date()}
            />
          </div>
          
          <Controller
            name={`workExperience.${index}.description`}
            control={control}
            render={({ field }) => <TextArea placeholder="Обязанности" rows={4} {...field} />}
          />
          {/* {errors.workExperience?.[index]?.description && <p className="error">{errors.workExperience[index].description.message}</p>} */}
        </div>
      )}
    </div>
  );
}
export default function WorkExperienceSection({ control, errors }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'workExperience' });

  useEffect(() => {
    if (fields.length === 0) {
      append({ company: '', position: '', country: '', city: '', startDate: null, endDate: null, description: '' });
    }
  }, [fields.length, append]);

  return (
    <section className="work-experience-section section">
      <SectionHeader 
        iconSrc="src/assets/ic-work-experience.svg" 
        title="Опыт работы" 
        hints={[
          'Укажите точные даты и обязанности',
          'Начните с последнего места работы',
          'Добавьте достижения, если есть'
        ]} 
      />
      {fields.map((field, index) => (
        <WorkExperienceItem
          key={field.id}
          control={control}
          errors={errors}
          index={index}
          onRemove={() => remove(index)}
        />
      ))}
      <AddingButton
        text="Добавить опыт работы"
        onClick={() => append({ company: '', position: '', country: '', city: '', startDate: null, endDate: null, description: '' })}
      />
    </section>
  );
}