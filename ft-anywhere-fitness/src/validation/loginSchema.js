import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be 3 characters long!'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be 6 characters long!'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms and conditions')
})

export default loginSchema;