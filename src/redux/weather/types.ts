import { Status } from '../utilTypes';

export interface weatherLocationParams {
  lat: number;
  lon: number;
}

export interface MainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface WindType {
  speed: number;
  deg: number;
}

export interface FetchWeatherType {
  main: MainType;
  wind: WindType;
  name: string;
}

export interface weatherInitialState {
  main: MainType;
  wind: WindType;
  name: string;
  status: Status;
  errorMsg: string;
}
