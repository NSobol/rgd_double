import React from 'react';
import s from './coachSelector.module.css';
import { useDispatch } from 'react-redux';
import { setSelectedCoaches } from '../../storage/slices/trainSlice';
import { CoachNumber } from '../coachNumber/CoachNumber';

export const CoachSelector = ({ coaches, direction }) => {
  const dispatch = useDispatch();

  const selectCoach = (coach) => {
    dispatch(setSelectedCoaches({ direction, coach }));
  };

  return (
    <div className={s['coachSelector']}>
      <div className={s['coachNumbers']}>
        <span>Вагоны</span>
        {coaches.map((el, i) => {
          return (
            <CoachNumber
              text={el.coach._id.slice(-4)}
              key={`coachNumber${i}`}
              click={() => selectCoach(el)}
            />
          );
        })}
      </div>
      <span>Нумерация вагонов начинается с головы поезда</span>
    </div>
  );
};
