import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../utilTypes';
import { factProps, FetchBreedsType, FetchFactType } from './types';
import { fetchFact, fetchBreeds } from './asyncAction';

export const initialState: factProps = {
  randomCatFact: '',
  breeds: [],
  status: Status.LOADING,
  errorMsg: '',
};

export const factSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchFact.pending, (state) => ({
      ...state,
      randomCatFact: '',
      status: Status.LOADING,
    }));

    builder.addCase(
      fetchFact.fulfilled,
      (state, action: PayloadAction<FetchFactType>) => ({
        ...state,
        randomCatFact: action.payload.fact,
        status: Status.SUCCESS,
      }),
    );

    builder.addCase(fetchFact.rejected, (state) => ({
      ...state,
      randomCatFact: '',
      status: Status.FAILURE,
      errorMsg: 'error while fetching cat fact',
    }));

    builder.addCase(
      fetchBreeds.fulfilled,
      (state, action: PayloadAction<FetchBreedsType>) => ({
        ...state,
        breeds: action.payload.data,
      }),
    );

    builder.addCase(fetchBreeds.rejected, (state) => ({
      ...state,
      status: Status.FAILURE,
      errorMsg: 'error while fetching breeds',
    }));

    builder.addCase(fetchBreeds.pending, (state) => ({
      ...state,
      status: Status.LOADING,
    }));
  },
});

export default factSlice.reducer;
