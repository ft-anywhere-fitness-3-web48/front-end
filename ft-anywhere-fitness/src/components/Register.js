import React from 'react';
import './Register.css';

const Register = (props) => {

    const { values, change, submit, error } = props
    const { username, name, email, password} = props.values

    const onChange = e => {
      const { name, value, checked, type } = e.target;
      const completedValue = type === 'checked' ? checked : value;
      change(name, completedValue);
    }


    const onSubmit = e => {
      e.preventDefault();
      submit();
    }

  return (
    <form onSubmit={onSubmit}>
    <div className='register-form'>
      <div>{error.username}</div>
      <div className='labels'>
      <label>Username: 
        <input 
        type='text'
        name='username'
        value={username}
        onChange={onChange}
        />
      </label>

      <div>{error.name}</div>
      <label>Name:
        <input 
        type='text'
        name='name'
        value={name}
        onChange={onChange}
        />
      </label>

      <div>{error.email}</div>
      <label>Email:
        <input 
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        />
      </label>

      <div>{error.password}</div>
      <label>Password:
        <input 
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        />
      </label>
      </div>
      <div>
      <h3>Account Type</h3>
      <div>{error.account}</div>
      <label>Client
        <input 
        type='radio'
        name='account'
        value='client'
        checked={values.account === 'client'}
        onChange={onChange}
        />
      </label>
      <label>Instructor 
        <input 
        type='radio'
        name='account'
        value='instructor'
        checked={values.account === 'instructor'}
        onChange={onChange}
        />
      </label>
      </div>
      <button>Join Now!</button>
    </div>
    </form>
  )
}

export default Register;
