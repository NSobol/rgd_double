import React, { useState } from 'react';
import s from './seat.module.css';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const Seat = ({ seat, setSeat, direction }) => {
const seatsLimit = useSelector(s => s.trains[`${direction}SeatsLimit`])
const [selected, setSelected] = useState(false);

const onClickSeat = () => {
  if (!selected && seatsLimit){
    alert('Выберите количество билетов')
    return
  }
  setSelected(!selected)
  setSeat(seat.index)
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
