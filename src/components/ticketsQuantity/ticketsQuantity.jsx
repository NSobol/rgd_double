import React from 'react';
import s from './ticketsQuantity.module.css';

export const TicketsQuantity = () => {
  return (
    <div>
      <span className={s['title']}>Количество билетов</span>
      <div className={s['container']}>
        <div className={s['ticketSelector-container']}>
          <select className={s['ticketSelector']} name='' id=''>
            <option value='1'>Взрослых - 1</option>
          </select>
          <span>Можно добавить еще 3 пассажиров </span>
        </div>
        <div className={s['ticketSelector-container']}>
          <select className={s['ticketSelector']} name='' id=''>
            <option value='1'>Детских - 1</option>
          </select>
          <span>
            Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в
            среднем на 50-65%
          </span>
        </div>
        <div className={s['ticketSelector-container']}>
          <select className={s['ticketSelector']} name='' id=''>
            <option value='1'>Детских «без места» - 1</option>
          </select>
        </div>
      </div>
    </div>
  );
};
