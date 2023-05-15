/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchWeatherType, weatherLocationParams } from './types';
import { kelvinToCelsium } from './utils';

export const fetchWeather = createAsyncThunk<
  FetchWeatherType,
  weatherLocationParams
>('weather/fetchWeather', async (params) => {
  const { lat, lon } = params;

  const { data } = await axios.get<FetchWeatherType>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a82b9cf0093d3518f69744e22d3a4e54`,
  );
  return {
    ...data,
    main: {
      ...data.main,
      feels_like: kelvinToCelsium(data.main.feels_like),
      temp: kelvinToCelsium(data.main.temp),
      temp_max: kelvinToCelsium(data.main.temp_max),
      temp_min: kelvinToCelsium(data.main.temp_min),
    },
  };
});
