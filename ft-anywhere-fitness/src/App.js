
import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

import { NavLink, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Header />
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Search</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small></small>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Search/>} />
              <Route path="/login" element={<Login/>} />
             
            </Routes>
          </div>
        </div>   
      <Footer />
    </div>
  );
}
 
export default App;
