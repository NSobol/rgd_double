import React from 'react';
import s from './logo.module.css';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className={s['logo-container']}>
      <Link to='/' className={s.logo}>
        Лого
      </Link>
    </div>
  );
};
