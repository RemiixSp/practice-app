import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchTask } from '../../redux/bored/asyncAction';
import styles from './bored.module.scss';

const BoredWidget: React.FC = () => {
  const { bored } = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const getTasks = async (): Promise<any> => {
    try {
      dispatch(fetchTask());
    } catch (error) {
      toast.error('Error while getting task');
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>If you bored just...</h3>
      </div>
      <div className={styles.taskContainer}>
        <p>{bored.taskToDo}</p>
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={getTasks} variant='contained'>
          Get new task
        </Button>
      </div>
    </div>
  );
};

export default BoredWidget;
