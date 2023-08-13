import React, { useState } from 'react';
import s from './seat.module.css';
import cn from 'classnames';

export const Seat = ({ seat, setSeat }) => {
  const [selected, setSelected] = useState(false);
const test = () => {
  setSelected(!selected)
  setSeat(seat.index)
}

  return (
    <button
      className={cn(s['button'], s[`seat${seat.index}`], selected && s['selected'])}
      disabled={!seat.available}
      onClick={test}
    >
      {seat.index}
    </button>
  );
};
