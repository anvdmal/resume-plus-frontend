import * as yup from 'yup';

export const resumeSchema = yup.object().shape({
     
  photo: yup.mixed().test('fileSize', 'Файл слишком большой (max 2MB)', (value) => !value || (value && value.size <= 2 * 1024 * 1024)),
  firstName: yup.string().required('Имя обязательно'),
  lastName: yup.string().required('Фамилия обязательна'),
  birthDate: yup.date().required('Дата рождения обязательна').max(new Date(), 'Дата не может быть в будущем'),
  country: yup.string().required('Страна обязательна'),
  city: yup.string().required('Город обязателен'),
  
  phone: yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Неверный формат телефона'),
  email: yup.string().email('Неверный email'),
  socialLinks: yup.array().of(
    yup.object().shape({
      platform: yup.string().required('Платформа обязательна'),
      link: yup.string().url('Неверный URL социальной сети'),
    })
  ).optional(),

  workExperience: yup.array().of(
    yup.object().shape({
      position: yup.string().required('Должность обязательна'),
      company: yup.string().required('Компания обязательна'),
      country: yup.string().required('Страна обязательна'),
      city: yup.string().required('Город обязателен'),
      startDate: yup.date().max(yup.ref('endDate'), 'Дата устройства не может быть позже увольнения'),
      endDate: yup.date().min(yup.ref('startDate'), 'Дата увольнения не может быть раньше устройства'),
      description: yup.string(),
    })
  ),
  
  
  education: yup.array().of(
    yup.object().shape({
      institution: yup.string().required('Учебное заведение обязательно'),
      specialty: yup.string().required('Специальность обязательна'),
      endYear: yup.number().required('Год окончания обязателен'),
      level: yup.string().required('Уровень образования обязателен'),
}),
  ),
  
  skills: yup.string(),
  personalQualities: yup.string(),
  professionalSkills: yup.string(),
  about: yup.string(),
});