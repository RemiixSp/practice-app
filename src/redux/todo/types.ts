export enum Status {
  LISTED = 'listed',
  PINNED = 'pinned',
  DONE = 'deleted',
}

export interface Task {
  id: string;
  description: string;
  status: Status;
}

export interface TodoState {
  listedTasks: Task[];
  doneTasks: Task[];
}
