import { Status } from '../utilTypes';

export interface FetchBoredType {
  activity: string;
}

export interface boredState {
  taskToDo: string;
  status: Status;
  errorMsg: string;
}
