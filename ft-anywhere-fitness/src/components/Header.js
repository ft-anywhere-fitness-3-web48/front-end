import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Register';
import './Register.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from './registerSchema';


function Header (props) {

  
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
  
    const onChange = (name, value) => {
      validate(name, value)
      setFormValues({ ...formValues, [name]: value})
    }

    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors ({...formErrors, [name]: err.errors[0]}))
    }

    const onSubmit = () => {
      axios.post('https://fitness-anywhere-3.herokuapp.com/auth/register', formValues)
      .then(res => {
        setAccount([res.data, ...account]);
      }) 
      .catch(err => {
        console.log(err);
      })
    };

    return (
      <div> 
          <nav className='homepage'>
            <Link to='/'>Home</Link>
            <Link className='register-link' to='/Register'>Register HERE!</Link>
          </nav>
          <Routes>
          <Route exact path='/' />
          <Route path='/Register' element={<Register 
          values={formValues}
          change={onChange}
          submit={onSubmit}
          error={formErrors}
          />} />
          {account.map(acc => {console.log(acc)})}
          </Routes>
        
        </div>
        
    )
}

export default Header