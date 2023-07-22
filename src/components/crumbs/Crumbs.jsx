import React from 'react';
import s from './crumbs.module.css';

export const Crumbs = ({ progress = 1 }) => {
  return (
    <div className={s['container-crumbs']}>
      <div className={s['crumb-item-yellow']}></div>
      <div className={s.block}>
        <div
          className={s[`${progress >= 1 ? 'crumb-item-active' : 'crumb-item'}`]}
        >
          <span>1</span> Билеты
        </div>
        <div
          className={s[`${progress >= 2 ? 'crumb-item-active' : 'crumb-item'}`]}
        >
          <span>2</span> Пассажиры
        </div>
        <div
          className={s[`${progress >= 3 ? 'crumb-item-active' : 'crumb-item'}`]}
        >
          <span>3</span> Оплата
        </div>
        <div
          className={
            s[`${progress >= 4 ? 'crumb-item-yellow' : 'crumb-item-grey'}`]
          }
        >
          <span>4</span> Проверка
        </div>
      </div>
      <div
        className={
          s[`${progress >= 4 ? 'crumb-item-yellow' : 'crumb-item-grey'}`]
        }
      ></div>
    </div>
  );
};
