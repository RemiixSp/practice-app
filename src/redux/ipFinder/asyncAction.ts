import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getIpParams, IpType } from './types';

export const fetchIp = createAsyncThunk<IpType, getIpParams>(
  'ip/fetchIp',
  async (params) => {
    const { ip } = params;

    const { data } = await axios.get<IpType>(
      `http://ip-api.com/json/${ip}?fields=16447`,
    );

    return data;
  },
);
