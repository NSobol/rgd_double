import React from 'react';
import s from './coachScheme.module.css';
import { Seat } from '../Seat/Seat';

export const CoachScheme = ({ coachInfo, seats, setSeats }) => {
  const fillSeatsArray = (seatsArray, size) => {
    const filledSeatsArray = [...seatsArray];
    for (let i = seatsArray.length; i < size; i++) {
      filledSeatsArray.push({ index: i + 1, available: false });
    }
    return filledSeatsArray;
  };

  const createSeat = (coachInfo) => {
    let filledSeatsArray = [];
    switch (coachInfo.coach.class_type) {
      case 'first':
        filledSeatsArray = fillSeatsArray(coachInfo.seats, 16);
        break;
      case 'second':
        filledSeatsArray = fillSeatsArray(coachInfo.seats, 32);
        break;
      case 'third':
        filledSeatsArray = fillSeatsArray(coachInfo.seats, 48);
        break;
      case 'fourth':
        filledSeatsArray = fillSeatsArray(coachInfo.seats, 62);
        break;
      default:
        console.error('Ошибка при отрисовке схемы рассадки пассажиров');
        break;
    }
    return filledSeatsArray.map((seat, i) => (
      <Seat
        seat={seat}
        key={`${coachInfo.coach.name}seat${i}`}
        seats={seats}
        setSeats={setSeats}
        coachInfo={coachInfo}
      />
    ));
  };

  return (
    <div className={s['schemeContainer']}>
      <div className={s['gridWrapper']}>
        <div className={s[`${coachInfo.coach.class_type}ClassGrid`]}>{createSeat(coachInfo)}</div>
      </div>
    </div>
  );
};
