import React from 'react';
import styles from './mainPage.module.scss';

const MainPage: React.FC = () => {
  const a = 5;
  return (
    <div className={styles.container}>
      <div className={styles.flexOnTodoAndWidgets}>
        <div className={styles.todoContainer}>
          <div className={styles.headerText}>
            <h3>Enter text to add new todo task</h3>
          </div>
          <form className={styles.inputContainer}>
            <textarea required placeholder='Enter text' cols={30} rows={10} />
            <div className={styles.addTaskContainer}>
              <button type='submit'>Add task</button>
            </div>
          </form>
          <div className={styles.allTodosContainer}>
            <h3>Here is your todo list</h3>
            <div className={styles.allTodos}>a</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
