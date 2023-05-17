import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/login';

const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
);

export default Router;
