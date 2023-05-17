import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchBreedsType, FetchFactType } from './types';

export const fetchFact = createAsyncThunk<FetchFactType>(
  'facts/fetchFacts',
  async () => {
    const { data } = await axios.get<FetchFactType>(
      'https://catfact.ninja/fact?max_length=100',
    );

    return data;
  },
);

export const fetchBreeds = createAsyncThunk<FetchBreedsType>(
  'facts/fetchBreeds',
  async () => {
    const { data } = await axios.get<FetchBreedsType>(
      'https://catfact.ninja/breeds?limit=5',
    );

    return data;
  },
);
