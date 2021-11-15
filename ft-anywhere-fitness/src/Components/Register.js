import React from 'react';
 
function Register(props) {
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  return (
    <div>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Register;