import React from 'react';
import { Controller } from 'react-hook-form';
import InputField from '../../components/ui/InputField.jsx';
import PhotoUpload from '../PhotoUpload';
import SectionHeader from '../components/SectionHeader.jsx';
import DatePickerField from '../components/DatePickerField.jsx';

export default function PersonalInfoSection({ control, errors }) {
  return (
    <section className="personal-info-section section">
      <SectionHeader 
        iconSrc="src/assets/ic-personal-data.svg" 
        title="Персональная информация" 
      />
      <div className="personal-info-layout">
        <div className="photo-column">
          <PhotoUpload name="photo" control={control} />
        </div>
        <div className="fields-column">
          <div className="group-column">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <InputField placeholder="Имя" variant="gray" {...field} />}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <InputField placeholder="Фамилия" variant="gray" {...field} />}
            />
            <Controller
              name="middleName"
              control={control}
              render={({ field }) => <InputField placeholder="Отчество" variant="gray" {...field} />}
            />
          </div>
          <div className="group-column">
            <DatePickerField
              name="birthDate"
              control={control}
              placeholderText="Дата рождения"
              maxDate={new Date()}
            />
            <Controller
              name="country"
              control={control}
              render={({ field }) => <InputField placeholder="Страна" variant="gray" {...field} />}
            />
            <Controller
              name="city"
              control={control}
              render={({ field }) => <InputField placeholder="Город" variant="gray" {...field} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}