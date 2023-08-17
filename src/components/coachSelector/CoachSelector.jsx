import React from 'react';
import s from './coachSelector.module.css';
import { CoachNumber } from '../coachNumber/CoachNumber';

export const CoachSelector = ({ coaches, setSelectedCoaches }) => {

  return (
    <div className={s['coachSelector']}>
      <div className={s['coachNumbers']}>
        <span>Вагоны</span>
        {coaches.map((el) => {
          return (
            <CoachNumber
              text={el.coach._id.slice(-4)}
              key={el.coach._id}
              coachInfo={el}
              setSelectedCoaches={setSelectedCoaches}
            />
          );
        })}
      </div>
      <span>Нумерация вагонов начинается с головы поезда</span>
    </div>
  );
};
