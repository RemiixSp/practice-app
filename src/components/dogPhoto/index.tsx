/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import styles from './dogPhoto.module.scss';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchDog } from '../../redux/dog/asyncAction';
import { Status } from '../../redux/utilTypes';

const DogWidget: React.FC = () => {
  const { dog } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const getDogs = async (): Promise<any> => {
    try {
      dispatch(fetchDog());
    } catch (error) {
      toast.error('Error while getting pizzas');
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.headerContainer}>
        <h3>Random dog photo</h3>
      </div>
      {dog.status === Status.SUCCESS && (
        <div className={styles.photoContainer}>
          <img src={dog.dogUrl} alt='dog' />
        </div>
      )}

      <div className={styles.regenerateBtnContainer}>
        <Button onClick={getDogs} variant='contained'>
          Regenerate
        </Button>
      </div>
    </div>
  );
};

export default DogWidget;
