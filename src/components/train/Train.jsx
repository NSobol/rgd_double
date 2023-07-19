import React from 'react';
import { ReactComponent as Loco } from './../../images/loco.svg';
import s from './train.module.css';

export const Train = ({ item }) => {
  console.log(item.departure.train.name);
  return (
    <div className={s.container}>
      <div className={s.header}>
        <Loco />
        <p>{item.departure.train.name}</p>
        <p></p>
      </div>
      <div className={s.main}></div>
      <div className={s.footer}></div>
    </div>
  );
};
