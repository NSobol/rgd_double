import React from 'react';
import { ReactComponent as Loco } from './../../images/loco.svg';
import s from './train.module.css';

export const Train = ({ item }) => {
  const data = item.departure;
  console.log(data);
  return (
    <div className={s.container}>
      <div className={s.header}>
        <Loco />
        <p>{item.departure.train.name}</p>
        <p>
          {data.from.city.name} - {data.to.city.name}
        </p>
      </div>
      <div className={s.main}></div>
      <div className={s.footer}>
        <button>Выбрать места</button>
      </div>
    </div>
  );
};
