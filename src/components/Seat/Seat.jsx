import React, { useEffect, useState } from 'react';
import s from './seat.module.css';
import cn from 'classnames';

export const Seat = ({ seat, seats, setSeats, coachInfo }) => {

const [selected, setSelected] = useState(false);

useEffect(() => {
  setSelected(seats.find(el => el.coach_id === coachInfo.coach._id && el.seat_number === seat.index));
  return () => setSeats(prev => {
    const currentSeat = prev.find(el => el.coach_id === coachInfo.coach._id && el.seat_number === seat.index);
    if (currentSeat) {
      setSelected(false);
      currentSeat.coach_id = '';
      currentSeat.seat_number = 0;
      currentSeat.price = 0;
      return prev;
    } else {
      return prev;
    }
  })
}, [seats, coachInfo, seat, setSeats])

const getPrice = (seat, coach) => {
  switch (coach.class_type) {
    case 'first':
      return coach.top_price;
    case 'second':
      return seat % 2 === 0 ? coach.top_price : coach.bottom_price;
    case 'third':
      return seat % 2 === 0 ? coach.top_price : coach.bottom_price;
    case 'fourth':
      return coach.top_price;
    default:
      console.error('Ошибка при определении стоимости места');
      break;
  }
}

const onClickSeat = () => {
  setSeats(prev => {
    const currentSeat = prev.find(el => el.coach_id === coachInfo.coach._id && el.seat_number === seat.index);
    if (currentSeat) {
      setSelected(false);
      currentSeat.coach_id = '';
      currentSeat.seat_number = 0;
      currentSeat.price = 0;
      return prev;
    } else {
      const freePlace = prev.find(el => el.coach_id === '' || el.seat_number === 0);
      if(freePlace){
        freePlace.coach_id = coachInfo.coach._id;
        freePlace.seat_number = seat.index;
        freePlace.price = getPrice(seat.index, coachInfo.coach);
        setSelected(true);
        return prev;
      } else {
        alert("Количество мест превышает количество билетов");
        return prev;
      }
    }
  })
}

  return (
    <button
      className={cn(s['button'], s[`seat${seat.index}`], selected && s['selected'])}
      disabled={!seat.available}
      onClick={onClickSeat}
    >
      {seat.index}
    </button>
  );
};
