import React, { useEffect, useState } from 'react';
import s from './coach.module.css';

export const Coach = ({ coach }) => {
  const [activeCoach, setActiveCoach] = useState({});

  useEffect(() => {
    coach.map((coach) => {
      return setActiveCoach((s) => {
        return { ...s, [coach.coach._id.slice(-4)]: { selected: false, ...coach } };
      });
    });
  }, [coach]);

  return (
    <div>
      <div className={s['header']}>
        <div className={s['coach-numbers']}>
          <span>Вагоны</span>
          {coach.map((el) => {
            return <span className={s['coach-number']}>{el.coach._id.slice(-4)}</span>;
          })}
        </div>
        <span>Нумерация вагонов начинается с головы поезда</span>
      </div>
      <div className={s['info']}>
        <div>
          <span>12</span>
          <span>вагон</span>
        </div>
        <div>
          <span>Места</span>
          <span>Верхние</span>
          <span>Нижние</span>
        </div>
        <div>
          <span>Стоимость</span>
          <span>2 020 р</span>
          <span>2 030 р</span>
        </div>
        <div>
          <span>Обсллуживание</span>
          <div>
            <span>Кондер</span>
            <span>ВайФай</span>
            <span>Постельное</span>
            <span>Кружка</span>
          </div>
        </div>
      </div>
    </div>
  );
};
