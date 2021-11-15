import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Register';


function Header(props) {
    return (
      
        <div> 
          <nav className='homepage'>
            <Link to='/'>Home</Link>
            <Link className='register-link' to='/register'>Register</Link>
          </nav>

          <Routes>
          <Route exact path='/' />

          <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        
    )
}

export default Header