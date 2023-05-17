import { useEffect } from 'react';
import { AuthType } from './types';

export const getUserFromLS = (): AuthType => {
  const data = typeof window !== 'undefined' && localStorage.getItem('user');
  let userName = '';
  let isAuthorized = false;
  if (data) {
    const parseddate = JSON.parse(data);
    userName = data ? parseddate?.userName : '';
    isAuthorized = data ? parseddate?.isAuthorized : false;
  }
  return { userName, isAuthorized };
};
