import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RegisterForm } from './Components/ResgisterForm/Form';
import { Header } from './Components/Header/Header'
import { Buttons } from './Components/CreateAndListButtons/Buttons';

ReactDOM.render(
  <div className="main-container">
    <div className="form-container">
    <Header />
    <RegisterForm />
    <Buttons />
    </div>
  </div>,
  document.getElementById('index')
);
