/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import TodoBlock from '../../components/todoBlock';
import { RootState, useAppSelector } from '../../redux/store';
import { addTask, inizialization } from '../../redux/todo';
import styles from './mainPage.module.scss';
import { Status, Task } from '../../redux/todo/types';
import DogWidget from '../../components/dogPhoto';
import IpWidget from '../../components/ipInfoWidget';
import CatFacts from '../../components/catFactWidget';
import Weather from '../../components/weather';
import BoredWidget from '../../components/boredWidget';

const MainPage: React.FC = () => {
  const todos = useAppSelector((state: RootState) => state.todo);
  const auth = useAppSelector((state: RootState) => state.authorization);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(inizialization());
    if (auth && !auth.isAuthorized) {
      navigate('/login');
    }
  }, []);

  const [todoTask, setTodoTask] = useState('');

  const getCurrentDate = (separator = '-'): string => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

  const onAddNewTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo: Task = {
      id: nanoid(),
      dateOfAdding: getCurrentDate(),
      description: todoTask,
      status: Status.LISTED,
    };
    if (!todos.listedTasks?.find((obj) => obj.description === todoTask)) {
      dispatch(addTask(newTodo));
      setTodoTask('');
    }
  };

  if (!auth.isAuthorized) return null;

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
          {todos.doneTasks && todos.doneTasks.length > 0 && (
            <div className={styles.allTodosContainer}>
              <h3>Here is your done tasks</h3>
              <div className={styles.allTodos}>
                {todos.doneTasks &&
                  todos.doneTasks.map((task) => <TodoBlock {...task} />)}
              </div>
            </div>
          )}
        </div>
        <div className={styles.widgets}>
          <DogWidget />
          <IpWidget />
          <CatFacts />
          <Weather />
          <BoredWidget />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
