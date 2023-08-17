import React, { useEffect, useState } from 'react';
import s from './coachNumber.module.css';
import cn from 'classnames';

export const CoachNumber = ({ text, coachInfo, setSelectedCoaches }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (selected) {
      setSelectedCoaches(prev => prev.filter(el => el.coach._id !== coachInfo.coach._id))
      setSelected(false);
    } else {
      setSelectedCoaches(prev => [...prev, coachInfo])
      setSelected(true);
    }
  };
  
  useEffect(() => {
    return () => setSelectedCoaches(prev => prev.filter(el => el.coach._id !== coachInfo.coach._id))
  }, [coachInfo.coach._id, setSelectedCoaches]);

  return (
    <span className={cn(s['coachNumber'], { [s['selected']]: selected })} onClick={handleClick}>
      {text}
    </span>
  );
};
