import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ButtonBack.module.scss';

const ButtonBack = () => {
  return (
    <div className={styles.root}>
      <Link to="/">
        <button>Повернутись назад</button>
      </Link>
    </div>
  );
};

export default ButtonBack;
