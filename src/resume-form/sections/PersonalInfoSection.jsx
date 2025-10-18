import React from 'react';
import { Controller } from 'react-hook-form';
import InputField from '../../components/ui/InputField.jsx';
import PhotoUpload from '../PhotoUpload';
import SectionHeader from '../components/SectionHeader.jsx';
import DatePickerField from '../components/DatePickerField.jsx';

export default function PersonalInfoSection({ control, errors, setPhotoPreview }) {
  return (
    <section className="personal-info-section section">
      <SectionHeader 
        iconSrc="src/assets/ic-personal-data.svg" 
        title="Персональная информация" 
      />
      <div className="personal-info-layout">
        <div className="photo-column">
          <PhotoUpload name="photo" control={control} setPhotoPreview={setPhotoPreview} />
        </div>
        <div className="fields-column">
          <div className="group-column">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <InputField placeholder="Имя" variant="gray" {...field} />}
            />
            {/* {errors.firstName && <p className="error">{errors.firstName.message}</p>} */}
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <InputField placeholder="Фамилия" variant="gray" {...field} />}
            />
            {/* {errors.lastName && <p className="error">{errors.lastName.message}</p>} */}
            <Controller
              name="middleName"
              control={control}
              render={({ field }) => <InputField placeholder="Отчество" variant="gray" {...field} />}
            />
            {/* {errors.middleName && <p className="error">{errors.middleName.message}</p>} */}
          </div>
          <div className="group-column">
            <DatePickerField
              name="birthDate"
              control={control}
              /* errors={errors} */
              placeholderText="Дата рождения"
              maxDate={new Date()}
            />
            <Controller
              name="country"
              control={control}
              render={({ field }) => <InputField placeholder="Страна" variant="gray" {...field} />}
            />
            {/* {errors.country && <p className="error">{errors.country.message}</p>} */}
            <Controller
              name="city"
              control={control}
              render={({ field }) => <InputField placeholder="Город" variant="gray" {...field} />}
            />
            {/* {errors.city && <p className="error">{errors.city.message}</p>} */}
          </div>
        </div>
      </div>
    </section>
  );
}