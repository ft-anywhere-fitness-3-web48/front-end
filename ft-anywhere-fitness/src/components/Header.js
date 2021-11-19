import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';


function Header(props) {

  return (
    <div>
      <nav className='homepage'>
        <Link to='/'>Home</Link>
        <Link className='register-link' to='/register'>Register HERE!</Link>
      </nav>


    </div>

  );
}

export default Header;