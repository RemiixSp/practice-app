import React from 'react';
import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../resources/imgs/logo.svg';

const Header: React.FC = () => {
  const a = 5;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.flexOnLogoAndName}>
          <Logo width={55} height={55} />
          <div className={styles.headerTextContainer}>
            <h3>Your best todo app</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
