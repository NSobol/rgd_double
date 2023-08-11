import React, { useState } from 'react';
import s from './seat.module.css';
import cn from 'classnames';

export const Seat = ({ seat }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={cn(s['button'], s[`seat${seat.index}`], selected && s['selected'])}
      disabled={!seat.available}
      onClick={() => setSelected(!selected)}
    >
      {seat.index}
    </button>
  );
};
