/* eslint-disable implicit-arrow-linebreak */
import { Task, Status } from './types';

export const findById = (state: Task[], action: string): any =>
  state.find((obj) => obj.id === action);

export const getFilteredTask = (state: Task[], action: string): Task[] =>
  state.filter((obj) => obj.id !== action);

export const getPinOrUnpinTask = (state: Task[], id: string): Task[] => {
  const neededObj = findById(state, id);
  if (neededObj) {
    if (neededObj.status === Status.LISTED) {
      const newPinObj = {
        ...neededObj,
        status: Status.PINNED,
      };

      const listedTasks = [newPinObj, ...getFilteredTask(state, id)];
      return listedTasks;
    }
    const newUnpinObj = {
      ...neededObj,
      status: Status.LISTED,
    };
    const listedTasks = [...getFilteredTask(state, id), newUnpinObj];

    return listedTasks;
  }
  return [];
};
