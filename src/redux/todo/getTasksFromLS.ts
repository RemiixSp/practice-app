import { Task, TodoState } from './types';

export const getTasksFromLS = (): TodoState => {
  const data = localStorage.getItem('todos');
  const listedTasks: Task[] = data ? JSON.parse(data)?.listedTasks : [];
  const doneTasks: Task[] = data ? JSON.parse(data)?.doneTasks : [];
  return { listedTasks, doneTasks };
};
