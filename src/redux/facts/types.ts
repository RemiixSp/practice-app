import { Status } from '../utilTypes';

export interface BreedType {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export interface factProps {
  randomCatFact: string;
  breeds: BreedType[];
  status: Status;
  errorMsg: string;
}

export interface FetchBreedsType {
  data: BreedType[];
}

export interface FetchFactType {
  fact: string;
  length: number;
}
