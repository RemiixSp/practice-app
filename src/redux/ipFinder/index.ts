import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ipState, IpType } from './types';
import { fetchIp } from './asyncAction';
import { Status } from '../utilTypes';

export const initialState: ipState = {
  ipInfo: {
    status: '',
    country: '',
    countryCode: '',
    region: '',
    regionName: '',
    city: '',
    zip: '',
  },
  status: Status.LOADING,
  errorMsg: '',
};

export const ipSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchIp.pending, (state) => ({
      ...state,
      status: Status.LOADING,
    }));

    builder.addCase(
      fetchIp.fulfilled,
      (state, action: PayloadAction<IpType>) => ({
        ...state,
        ipInfo: action.payload,
        status: Status.SUCCESS,
      }),
    );

    builder.addCase(fetchIp.rejected, (state) => ({
      ...state,
      status: Status.FAILURE,
      errorMsg: 'Error happend when trying get this ip info',
    }));
  },
});

export default ipSlice.reducer;
