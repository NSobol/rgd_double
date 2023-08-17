import React, { useEffect, useState } from 'react';
import s from './seat.module.css';
import cn from 'classnames';

export const Seat = ({ seat, seats, setSeats, coachId }) => {

const [selected, setSelected] = useState(false);

useEffect(() => {
  setSelected(seats.find(el => el.coach_id === coachId && el.seat_number === seat.index))
  return () => setSeats(prev => {
    const currentSeat = prev.find(el => el.coach_id === coachId && el.seat_number === seat.index);
    if (currentSeat) {
      setSelected(false);
      currentSeat.coach_id = '';
      currentSeat.seat_number = 0;
      return prev;
    } else {
      return prev
    }
  })
}, [seats, coachId, seat, setSeats])

const onClickSeat = () => {
  setSeats(prev => {
    const currentSeat = prev.find(el => el.coach_id === coachId && el.seat_number === seat.index);
    if (currentSeat) {
      setSelected(false);
      currentSeat.coach_id = '';
      currentSeat.seat_number = 0;
      return prev;
    } else {
      const freePlace = prev.find(el => el.coach_id === '' || el.seat_number === 0);
      if(freePlace){
        freePlace.coach_id = coachId;
        freePlace.seat_number = seat.index
        setSelected(true)
        return prev;
      } else {
        alert("Количество мест превышает количество билетов")
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
