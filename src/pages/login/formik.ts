import * as yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Incorrect email')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9~@.\s]+$/,
      'Only alphabets are allowed for this field ',
    )
    .min(8, 'Email is too short')
    .max(36, 'Email is too long'),
  password: yup
    .string()
    .required('Required')
    .min(8, 'Password is too short')
    .max(25, 'Password is too long'),
});
