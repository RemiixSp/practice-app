/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './todo.module.scss';
import { ReactComponent as DoneSvg } from '../../resources/imgs/done.svg';
import { ReactComponent as DeleteSvg } from '../../resources/imgs/delete.svg';
import { ReactComponent as PinSvg } from '../../resources/imgs/pin.svg';
import { ReactComponent as UnpinSvg } from '../../resources/imgs/unpin.svg';
import { Status } from '../../redux/todo/types';

import { deleteTaskFromStorage, finishTask, pinTask } from '../../redux/todo';

interface TodoBlockProps {
  id: string;
  description: string;
  status: Status;
}

const TodoBlock: React.FC<TodoBlockProps> = ({ id, description, status }) => {
  const dispatch = useDispatch();

  const onFinishTaskClick = (): void => {
    dispatch(finishTask(id));
  };
  const onDeleteTaskClick = (): void => {
    dispatch(deleteTaskFromStorage(id));
  };
  const onPinTaskClick = (): void => {
    dispatch(pinTask(id));
  };

  return (
    <div
      className={classNames(styles.todoCotainer, {
        [styles.pinnedTask]: status === Status.PINNED,
      })}
    >
      {status === Status.PINNED && <p className={styles.pinnedText}>pinned</p>}

      <div className={styles.textTodo}>
        <p>{description}</p>
      </div>
      <div className={styles.icons}>
        <DoneSvg
          onClick={onFinishTaskClick}
          className={styles.icon}
          width={15}
          height={15}
        />
        {status === Status.LISTED ? (
          <PinSvg
            onClick={onPinTaskClick}
            className={styles.icon}
            width={15}
            height={15}
          />
        ) : (
          <UnpinSvg
            onClick={onPinTaskClick}
            className={styles.icon}
            width={15}
            height={15}
          />
        )}

        <DeleteSvg
          onClick={onDeleteTaskClick}
          className={styles.icon}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default TodoBlock;
