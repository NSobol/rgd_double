import React, { useEffect, useState } from 'react';
import s from './coachNumber.module.css';
import cn from 'classnames';

export const CoachNumber = ({ text, click = () => {} }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((s) => !s);
    click();
  };
  
  useEffect(() => {
    setSelected(false);
  }, [text]);

  return (
    <span className={cn(s['coachNumber'], { [s['selected']]: selected })} onClick={handleClick}>
      {text}
    </span>
  );
};
