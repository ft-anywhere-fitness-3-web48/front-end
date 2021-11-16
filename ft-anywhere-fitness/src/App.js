
import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Search</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small></small>
            <NavLink activeClassName="active" to="/register">Register</NavLink><small></small>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Search/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
 
export default App;
