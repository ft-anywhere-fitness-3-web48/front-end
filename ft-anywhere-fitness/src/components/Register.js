import React from 'react';

const Register = (props) => {

    const { values, change, submit } = props
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
    <div>
      <label>Username: 
        <input 
        type='text'
        name='username'
        value={username}
        onChange={onChange}
        />
      </label>

      <label>Name:
        <input 
        type='text'
        name='name'
        value={name}
        onChange={onChange}
        />
      </label>

      <label>Email:
        <input 
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        />
      </label>

      <label>Password:
        <input 
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        />
      </label>

      <h3>Account Type</h3>
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

      <button>submit</button>
    </div>
    </form>
  )
}

export default Register;
