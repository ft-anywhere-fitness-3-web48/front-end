import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './registerSchema';
import './Register.css';

const Register = (props) => {

  const [account, setAccount] = useState({});
  const [formValues, setFormValues] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    account: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
  });

  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fitness-anywhere-3.herokuapp.com/auth/register', formValues)
      .then(res => {
        setAccount({ ...res.data, ...account });
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log('here');

  return (
    <form onSubmit={onSubmit}>
      <div className='register-form'>
        <div>{formErrors.username}</div>
        <div className='labels'>
          <label>Username:
            <input
              type='text'
              name='username'
              value={formValues.username}
              onChange={onChange}
            />
          </label>

          <div>{formErrors.name}</div>
          <label>Name:
            <input
              type='text'
              name='name'
              value={formValues.name}
              onChange={onChange}
            />
          </label>

          <div>{formErrors.email}</div>
          <label>Email:
            <input
              type='email'
              name='email'
              value={formValues.email}
              onChange={onChange}
            />
          </label>

          <div>{formErrors.password}</div>
          <label>Password:
            <input
              type='password'
              name='password'
              value={formValues.password}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <h3>Account Type</h3>
          <div>{formErrors.account}</div>
          <label>Client
            <input
              type='radio'
              name='account'
              value='client'
              checked={formValues.account === 'client'}
              onChange={onChange}
            />
          </label>
          <label>Instructor
            <input
              type='radio'
              name='account'
              value='instructor'
              checked={formValues.account === 'instructor'}
              onChange={onChange}
            />
          </label>
        </div>
        <button>Join Now!</button>
      </div>
    </form>
  );
};

export default Register;
