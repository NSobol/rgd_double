import React from 'react';
import { Train } from '../train/Train';
import s from './trainList.module.css';
import { useDispatch } from 'react-redux';
import { getTrains, setFilter } from '../../storage/slices/trainSlice';

export const TrainsList = ({ trains, total }) => {
  const dispatch = useDispatch();

  const handleFilter = (filter, e) => {
    dispatch(setFilter({ filter, value: e.target.value }));
    dispatch(getTrains());
  };

  return (
    <div>
      <div className={s['total-admin']}>
        <p className={s['total-count']}>найдено {total}</p>
        <div className={s['total-sort']}>
          <div className={s['total-select']}>
            <label htmlFor=''>сортировать по: </label>
            <select onChange={(e) => handleFilter('sort', e)}>
              <option value='date'>времени</option>
              <option value=''>стоимости</option>
              <option value='duration'>длительности</option>
            </select>
          </div>
          <div className={s['totalSelect']}>
            <p className={s['total-show']}>показывать по:</p>
            <input
              onChange={(e) => handleFilter('limit', e)}
              className={s['total']}
              data_count='5'
              type='radio'
              name='countOnPage'
              value={5}
              defaultChecked={true}
            />
            <input
              onChange={(e) => handleFilter('limit', e)}
              className={s['total']}
              data_count='10'
              type='radio'
              name='countOnPage'
              value={10}
            />
            <input
              onChange={(e) => handleFilter('limit', e)}
              className={s['total']}
              data_count='20'
              type='radio'
              name='countOnPage'
              value={20}
            />
          </div>
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
