import React from 'react';
import styles from './todo.module.scss';
import { ReactComponent as DoneSvg } from '../../resources/imgs/done.svg';
import { ReactComponent as DeleteSvg } from '../../resources/imgs/delete.svg';
import { ReactComponent as PinSvg } from '../../resources/imgs/pin.svg';
import { Status } from '../../redux/todo/types';

interface TodoBlockProps {
  id: string;
  description: string;
  status: Status;
}

const TodoBlock: React.FC<TodoBlockProps> = ({ id, description, status }) => {
  const a = 5;
  return (
    <div className={styles.todoCotainer}>
      <div className={styles.textTodo}>
        <p>{description}</p>
      </div>
      <div className={styles.icons}>
        <DoneSvg className={styles.icon} width={15} height={15} />
        <PinSvg className={styles.icon} width={15} height={15} />
        <DeleteSvg className={styles.icon} width={15} height={15} />
      </div>
    </div>
  );
};

export default TodoBlock;
