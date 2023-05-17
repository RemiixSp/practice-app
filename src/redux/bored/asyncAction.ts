import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchBoredType } from './types';

export const fetchTask = createAsyncThunk<FetchBoredType>(
  'task/fetchTaskStatus',
  async () => {
    const { data } = await axios.get<FetchBoredType>(
      'https://www.boredapi.com/api/activity/',
    );

    return data;
  },
);
