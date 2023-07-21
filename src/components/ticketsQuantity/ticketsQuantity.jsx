import React from 'react';
import s from './ticketsQuantity.module.css';

export const TicketsQuantity = () => {
  return (
    <div>
      <span className={s['title']}>Количество билетов</span>
      <div>
        <input type='text' />
        <span>Можно добавить еще 3 пассажиров </span>
      </div>
      <div>
        <select name="" id="">
          <option value="1">Взрослые</option>
        </select>
        <span>
          Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в
          среднем на 50-65%
        </span>
      </div>
      <div>
        <input type='text' />
      </div>
    </div>
  );
};