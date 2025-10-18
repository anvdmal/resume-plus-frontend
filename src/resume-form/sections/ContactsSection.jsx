import React, { useState, useEffect } from 'react';
import { useFieldArray, Controller, useWatch } from 'react-hook-form';
import InputField from '../../components/ui/InputField.jsx';
import CustomDropdown from '../../components/ui/CustomDropdown';
import SectionHeader from '../components/SectionHeader.jsx';
import OptionButtonReversed from '../components/OptionButtonReversed.jsx';
import AddingButton from '../components/AddingButton.jsx';


const socialNetworks = [
  'Telegram',
  'GitHub',
  'VK',
  'Instagram',
  'LinkedIn',
  'Facebook',
];

function SocialSection({ control, errors, index, onRemove }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => setIsOpen(!isOpen);

  const platformValue = useWatch({
    control,
    name: `socialLinks.${index}.platform`,
    defaultValue: '',
  });

  const platformError = errors?.socialLinks?.[index]?.platform;
  const linkError = errors?.socialLinks?.[index]?.link;

  return (
    <div className="section-item-white">
      <div className="inner-section-header" onClick={toggleSection}>
        <div className="header-with-button">
          <OptionButtonReversed
            onClick={toggleSection}
            isOpen={isOpen}
          />
          <h3>{platformValue || 'Социальная сеть'}</h3>
        </div>
        <button 
          className="delete-button" 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <img src="src/assets/ic-cancel.svg" alt="Remove" className="cancel-icon" />
        </button>
      </div>
      {isOpen && (
        <div className="social-content">
          <div className="dropdown-container">
            <Controller
              name={`socialLinks.${index}.platform`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CustomDropdown
                  options={socialNetworks}
                  initialValue={field.value || ''}
                  onSelect={field.onChange}
                  placeholder="Выберите платформу"
                />
              )}
            />
            {platformError && <p className="error">{platformError.message}</p>}
          </div>
          <div className="input-container">
            <Controller
              name={`socialLinks.${index}.link`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputField 
                  placeholder="Ссылка" 
                  variant="gray" 
                  {...field} 
                  value={field.value || ''}
                />
              )}
            />
            {linkError && <p className="error">{linkError.message}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactsSection({ control, errors }) {
  const { fields, append, remove } = useFieldArray({ 
    control, 
    name: 'socialLinks' 
  });

  return (
    <section className="contacts-section section">
      <SectionHeader 
        iconSrc="src/assets/ic-contacts.svg" 
        title="Контакты" 
      />
      <div className='group'>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <InputField placeholder="Номер телефона" variant="gray" {...field} />}
        />
       {/*  {errors?.phone && <p className="error">{errors.phone.message}</p>} */}
        
        <Controller
          name="email"
          control={control}
          render={({ field }) => <InputField placeholder="Электронная почта" variant="gray" {...field} />}
        />
       {/*  {errors?.email && <p className="error">{errors.email.message}</p>} */}
      </div>
      {fields.map((field, index) => (
        <SocialSection
          key={field.id}
          control={control}
          errors={errors}
          index={index}
          onRemove={() => remove(index)}
        />
      ))}
      <AddingButton
        text="Добавить социальную сеть"
        onClick={() => append({ platform: '', link: '' })}
      />
    </section>
  );
}