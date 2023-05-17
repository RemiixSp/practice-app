import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, Input } from '@mui/material';
import { initialValues, validationSchema } from './formik';
import { login } from '../../redux/authorization';
import styles from './login.module.scss';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values.email));
      navigate('/');
    },
  });
  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <div className={styles.loginHeader}>
          <h2>Enter your data</h2>
        </div>
        <div className={styles.inputContainer}>
          <input
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder='email'
            type='email'
            min={8}
            max={36}
            required
          />
          <input
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder='password'
            type='password'
            min={8}
            max={25}
            required
          />
        </div>
        <div className={styles.btnContainer}>
          <Button type='submit' variant='contained' color='success'>
            Signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
