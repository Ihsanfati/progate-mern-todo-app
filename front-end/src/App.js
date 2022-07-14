import React from 'react';
import { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;
