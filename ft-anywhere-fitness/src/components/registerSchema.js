import * as yup from 'yup';

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Please Enter a Valid Username')
    .min(4, 'Username must be more than 4 characters'),

  name: yup
    .string()
    .trim()
    .required('Please Enter Full Name')
    .min(4, 'Username must be more than 4 characters'),

  email: yup
    .string()
    .trim()
    .required('Please Enter Email')
    .min(3, 'Username must be more than 3 characters'),

  password: yup
    .string()
    .trim()
    .required('Please Enter Email')
    .min(3, 'Username must be more than 3 characters'),

  account: yup
    .string()
    .required('Please choose account type')
});

export default registerSchema;