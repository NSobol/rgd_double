import React, { useEffect } from 'react';
import s from './coachTypeSelect.module.css';
import cn from 'classnames';
import { ReactComponent as FourthClass } from '../../images/Fourth_class.svg';
import { ReactComponent as ThirdClass } from '../../images/Third_class.svg';
import { ReactComponent as SecondClass } from '../../images/Second_class.svg';
import { ReactComponent as FirstClass } from '../../images/First_class.svg';
import { useDispatch, useSelector } from 'react-redux';
import { resetCoachType, setCoachType } from '../../storage/slices/trainSlice';

export const CoachTypeSelect = ({ routeInfo, direction }) => {
  const dispatch = useDispatch();
  const coachType = useSelector((s) => s.trains[`${direction}CoachType`]);

  const setType = (type) => {
    dispatch(setCoachType({ direction, type }));
  };

  useEffect(() => {
    dispatch(resetCoachType());
  }, [dispatch, routeInfo]);

  return (
    <div>
      <span className={s['title']}>Тип вагона</span>
      <div className={s['horizontal-container']}>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_fourth_class })}
          onClick={() => routeInfo.have_fourth_class && setType('fourth_class')}
        >
          <FourthClass fill={coachType === 'fourth_class' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'fourth_class' })}>
            Сидячий
          </span>
        </div>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_third_class })}
          onClick={() => routeInfo.have_third_class && setType('third_class')}
        >
          <ThirdClass fill={coachType === 'third_class' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'third_class' })}>
            Плацкарт
          </span>
        </div>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_second_class })}
          onClick={() => routeInfo.have_second_class && setType('second_class')}
        >
          <SecondClass fill={coachType === 'second_class' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'second_class' })}>
            Купе
          </span>
        </div>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_first_class })}
          onClick={() => routeInfo.have_first_class && setType('first_class')}
        >
          <FirstClass fill={coachType === 'first_class' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'first_class' })}>
            Люкс
          </span>
        </div>
      </div>
    </div>
  );
};
