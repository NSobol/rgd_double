import React from 'react';
import { Train } from '../train/Train';
import s from './trainList.module.css';

export const TrainsList = ({ trains, total }) => {
  return (
    <div>
      <div className={s['total-admin']}>
        <p className={s['total-count']}>найдено {total}</p>
        <div className={s['total-sort']}>
          <div className={s['total-select']}>
            <label htmlFor=''>сортировать по: </label>
            <select name='' id=''>
              <option value='времени'>времени</option>
              <option value='стоимости'>стоимости</option>
              <option value='длительности'>длительности</option>
            </select>
          </div>
          <p className={s['total-show']}>
            показывать по: <span className={s['active']}>5</span>
            <span className={s['total']}>10</span>
            <span className={s['total']}>20</span>
          </p>
        </div>
      </div>
      <div>
        {trains.map((item, i) => (
          <Train key={i} item={item} {...item} />
        ))}
      </div>
    </div>
  );
};
