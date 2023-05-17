import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { boredState, FetchBoredType } from './types';
import { fetchTask } from './asyncAction';
import { Status } from '../utilTypes';

export const initialState: boredState = {
  taskToDo: '',
  errorMsg: '',
  status: Status.LOADING,
};

export const boredSlice = createSlice({
  name: 'bored',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTask.pending, (state) => ({
      ...state,
      taskToDo: '',
      status: Status.LOADING,
    }));

    builder.addCase(
      fetchTask.fulfilled,
      (state, action: PayloadAction<FetchBoredType>) => ({
        ...state,
        taskToDo: action.payload.activity,
        status: Status.SUCCESS,
      }),
    );

    builder.addCase(fetchTask.rejected, (state) => ({
      ...state,
      taskToDo: '',
      status: Status.FAILURE,
      errorMsg: 'Error happened while fetching task',
    }));
  },
});

export default boredSlice.reducer;
