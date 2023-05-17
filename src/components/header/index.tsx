import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../resources/imgs/logo.svg';
import { RootState, useAppSelector } from '../../redux/store';
import { signOut } from '../../redux/authorization';

const Header: React.FC = () => {
  const { authorization } = useAppSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOutClick = (): void => {
    dispatch(signOut());
    navigate('/login');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.flexOnLogoAndName}>
          <Logo width={55} height={55} />
          <div className={styles.headerTextContainer}>
            <h3>Your best todo app</h3>
          </div>
        </div>
        {authorization.isAuthorized && (
          <div className={styles.authHeader}>
            <p>{authorization.userName}</p>
            <Button onClick={onSignOutClick} variant='contained' color='error'>
              Signout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
