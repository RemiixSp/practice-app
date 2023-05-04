/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import TodoBlock from '../../components/todoBlock';
import { RootState, useAppSelector } from '../../redux/store';
import { addTask } from '../../redux/todo';
import styles from './mainPage.module.scss';
import { Status } from '../../redux/todo/types';

const MainPage: React.FC = () => {
  const todos = useAppSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const [todoTask, setTodoTask] = useState('');

  const onAddNewTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      description: todoTask,
      status: Status.LISTED,
    };
    if (!todos.listedTasks?.find((obj) => obj.description === todoTask)) {
      dispatch(addTask(newTodo));
      setTodoTask('');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.flexOnTodoAndWidgets}>
        <div className={styles.todoContainer}>
          <div className={styles.headerText}>
            <h3>Enter text to add new todo task</h3>
          </div>
          <form onSubmit={onAddNewTask} className={styles.inputContainer}>
            <textarea
              value={todoTask}
              onChange={(e) => setTodoTask(e.target.value)}
              required
              placeholder='Enter text'
              cols={30}
              rows={10}
            />
            <div className={styles.addTaskContainer}>
              <button type='submit'>Add task</button>
            </div>
          </form>
          {todos.listedTasks && todos.listedTasks.length > 0 && (
            <div className={styles.allTodosContainer}>
              <h3>Here is your todo list</h3>
              <div className={styles.allTodos}>
                {todos.listedTasks &&
                  todos.listedTasks.map((task) => <TodoBlock {...task} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
