import React from 'react';

function Register() {
  return (
    <div>
      <label>Username: 
        <input 
        type='text'
        name='username'
        />
      </label>

      <label>Name:
        <input 
        type='text'
        name='name'
        />
      </label>

      <label>Email:
        <input 
        type='email'
        name='email'
        />
      </label>

      <label>Password:
        <input 
        type='password'
        name='password'
        />
      </label>

      <h3>Account Type</h3>
      <label>Client
        <input 
        type='radio'
        name='account'
        />
      </label>
      <label>Instructor 
        <input 
        type='radio'
        name='account'
        />
      </label>
    </div>
  )
}

export default Register;
