import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Register';


function Header (props) {

  const [form, setForm] = useState([]);
  const [formValues, setFormValues] = useState({ username: '',
    name: '',
    email: '',
    password: '',
    account: '', });
  
    const updatedForm = (name, value) => {
      setFormValues({ ...formValues, [name]: value})
    }

    const submitedForm = () => {
      setForm([formValues, ...form]);
      setFormValues({ 
        username: '',
      name: '',
      email: '',
      password: '',
      account: '', 
    })};

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
          submit={submitedForm}
          />} />
          </Routes>
        </div>
        
    )
}

export default Header