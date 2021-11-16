import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Register';
import axios from 'axios';
import * as yup from 'yup';
import schema from './registerSchema';


function Header (props) {

  // const [form, setForm] = useState({username: '', password: ''});
  const [account, setAccount] = useState([]);
  const [formValues, setFormValues] = useState({ 
    username: '',
    name: '',
    email: '',
    password: '',
    account: '', });

    const [formErrors, setFormErrors] = useState({ 
      username: '',
      name: '',
      email: '',
      password: '',
      });
  
    const updatedForm = (name, value) => {
      validate(name, value)
      setFormValues({ ...formValues, [name]: value})
    }

    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors ({...formErrors, [name]: err.errors[0]}))
    }

    const submittedForm = () => {
      axios.post('https://fitness-anywhere-3.herokuapp.com/auth/register', {username: '', password: '', role_id: ''})
      .then(res => {
        setAccount([res.data, ...account]);
      }) 
      .catch(err => {
        console.log(err);
      })
      // .finally(() => setFormValues(formValues));
    };

    return (
      
        <div> 
          <nav className='homepage'>
            <Link to='/'>Home</Link>
            <Link className='register-link' to='/register'>Register</Link>
          </nav>

          <Routes>
          <Route exact path='/' />
          <Route path='/register' element={<Register 
          values={formValues}
          change={updatedForm}
          submit={submittedForm}
          error={formErrors}
          />} />
          {account.map(acc => (
            <div key={acc.id}>
              {acc.username}
              {acc.password}
            </div>
          ))}
          </Routes>
        </div>
        
    )
}

export default Header