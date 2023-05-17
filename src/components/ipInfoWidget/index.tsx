import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import styles from './ipInfo.module.scss';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchIp } from '../../redux/ipFinder/asyncAction';
import { Status } from '../../redux/utilTypes';
import { IpType } from '../../redux/ipFinder/types';

const IpWidget: React.FC = () => {
  const ip = useAppSelector((state: RootState) => state.ipFinder);
  const dispatch = useAppDispatch();
  const [inputVal, setInputVal] = useState('');

  const getIpValue = async (): Promise<any> => {
    try {
      dispatch(fetchIp({ ip: inputVal }));
      if (ip.ipInfo.city === undefined) {
        toast.error('Not correct ip andress');
      }
    } catch (error) {
      toast.error('Error while getting ip');
    }
  };
  const ipProps = Object.keys(ip.ipInfo).filter((obj) => obj !== 'status');

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.header}>
        <h3>Find by id</h3>
      </div>
      <div className={styles.ipData}>
        {ip.status === Status.SUCCESS ? (
          <ul className={styles.allInfo}>
            {ipProps.map((value, index) => (
              <li key={value} className={styles.infoObj}>
                <p>{`${value}: ${ip.ipInfo[value as keyof IpType]}`}</p>
              </li>
            ))}
          </ul>
        ) : (
          <>Loading</>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder='Enter ip adress'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={getIpValue} variant='contained'>
          Find
        </Button>
      </div>
    </div>
  );
};

export default IpWidget;
