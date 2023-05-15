import { Status } from '../utilTypes';

export interface FetcgDogType {
  message: string;
  status: string;
}

export interface dogState {
  dogUrl: string;
  status: Status;
  errorMsg: string;
}
