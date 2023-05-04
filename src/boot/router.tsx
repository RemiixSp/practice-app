/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/mainPage';

const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
  </Routes>
);

export default Router;
