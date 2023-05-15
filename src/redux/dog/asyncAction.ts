/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetcgDogType } from './types';

export const fetchDog = createAsyncThunk<FetcgDogType>(
  'dog/fetchDogStatus',
  async () => {
    const { data } = await axios.get<FetcgDogType>(
      'https://dog.ceo/api/breeds/image/random',
    );

    return data;
  },
);
