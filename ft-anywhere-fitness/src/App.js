
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
      <div className="header">
      
      <Header />
        <div>
            <NavLink exact activeClassName="active" to="/search">Search</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small></small>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/search" element={<Search/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </div>
        </div>
        <div className='filler'>
          <h1>Anywhere Fitness</h1>
          </div>
          <div className='details'>
          <h2>Get to know about Us!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi ipsa mollitia, quaerat aut dolor eos debitis architecto nam officia, quisquam laudantium impedit officiis fugit nihil ipsam molestiae? Sed, perspiciatis.</p>
          </div> 
          <div className='bottom'>
      <Footer />
      </div>
    </div>
  );
}
 
export default App;
