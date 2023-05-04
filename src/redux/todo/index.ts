/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable consistent-return */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Task, Status } from './types';
// import { getTasksFromLS } from '../../utils/getTasksFromLS';
import { getPinOrUnpinTask, getFilteredTask, findById } from './utils';

const initialState: TodoState = {
  listedTasks: [],
  doneTasks: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // inizialization: (state) => {
    //   const { listedTasks, doneTasks } = getTasksFromLS();

    //   return {
    //     ...state,
    //     listedTasks,
    //     doneTasks,
    //   };
    // },

    addTask: (state, action: PayloadAction<Task>) => {
      const listedTasks = [...state.listedTasks, action.payload];
      const json = JSON.stringify({ listedTasks, doneTasks: state.doneTasks });
      localStorage.setItem('todos', json);

      return {
        ...state,
        listedTasks,
      };
    },

    finishTask: (state, action: PayloadAction<string>) => {
      const listedTasks = getFilteredTask(state.listedTasks, action.payload);
      const neededObj = findById(state.listedTasks, action.payload);
      if (neededObj) {
        const doneObj = { ...neededObj, status: Status.DONE };
        const doneTasks = [...state.doneTasks, doneObj];
        const json = JSON.stringify({ listedTasks, doneTasks });
        localStorage.setItem('todos', json);

        return {
          ...state,
          listedTasks,
          doneTasks,
        };
      }
    },

    deleteTaskFromStorage: (state, action: PayloadAction<string>) => {
      const listedTasks = getFilteredTask(state.listedTasks, action.payload);
      const doneTasks = getFilteredTask(state.doneTasks, action.payload);
      const json = JSON.stringify({ listedTasks, doneTasks });
      localStorage.setItem('todos', json);
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },

    pinTask: (state, action: PayloadAction<string>) => {
      const listedTasks = getPinOrUnpinTask(state.listedTasks, action.payload);
      const json = JSON.stringify({ listedTasks, doneTasks: state.doneTasks });
      localStorage.setItem('todos', json);

      return {
        ...state,
        listedTasks,
      };
    },
  },
});

export const { addTask, finishTask, deleteTaskFromStorage, pinTask } =
  todoSlice.actions;

export default todoSlice.reducer;
