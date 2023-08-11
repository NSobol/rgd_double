import React from 'react';
import s from './coachScheme.module.css';
import cn from 'classnames';

export const CoachScheme = ({ coach }) => {
  const fillSeatsArray = (seatsArray, size) => {
    const filledSeatsArray = [...seatsArray];
    for (let i = seatsArray.length; i < size; i++) {
      filledSeatsArray.push({ index: i + 1, available: false });
    }
    return filledSeatsArray;
  };

  const createSeat = (coach) => {
    let filledSeatsArray = [];
    switch (coach.coach.class_type) {
      case 'first':
        filledSeatsArray = fillSeatsArray(coach.seats, 16);
        break;
      case 'second':
        filledSeatsArray = fillSeatsArray(coach.seats, 32);
        break;
      case 'third':
        filledSeatsArray = fillSeatsArray(coach.seats, 48);
        break;
      case 'fourth':
        filledSeatsArray = fillSeatsArray(coach.seats, 62);
        break;

      default:
        console.error('Ошибка при отрисовке схемы рассадки пассажиров');
        break;
    }
    return filledSeatsArray.map((seat, i) => (
      <button
        className={cn(s['button'], s[`seat${seat.index}`])}
        key={`${coach.coach.name}seat${i}`}
      >
        {seat.index}
      </button>
    ));
  };

  return (
    <div className={s['schemeContainer']}>
      <div className={s['gridWrapper']}>
        <div className={s[`${coach.coach.class_type}ClassGrid`]}>{createSeat(coach)}</div>
      </div>
    </div>
  );
};