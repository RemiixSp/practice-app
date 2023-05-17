/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './style/app.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routing from './boot/router';
import Header from './components/header';
import { store } from './redux/store';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  </Provider>
);

export default App;
