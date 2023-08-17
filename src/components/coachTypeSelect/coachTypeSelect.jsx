import React, { useState } from 'react';
import s from './coachTypeSelect.module.css';
import cn from 'classnames';
import { ReactComponent as FourthClass } from '../../images/Fourth_class.svg';
import { ReactComponent as ThirdClass } from '../../images/Third_class.svg';
import { ReactComponent as SecondClass } from '../../images/Second_class.svg';
import { ReactComponent as FirstClass } from '../../images/First_class.svg';

export const CoachTypeSelect = ({ routeInfo, direction, getCoachType }) => {
  const [coachType, setCoachType] = useState('');

  const setType = (type) => {
    if (coachType === type) {
      setCoachType('');
      getCoachType('');
    } else {
      setCoachType(type);
      getCoachType(type);
    }
  };

  return (
    <div className={s['coachTypeSelect']}>
      <span className={s['title']}>Тип вагона</span>
      <div className={s['horizontal-container']}>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_fourth_class })}
          onClick={() => routeInfo.have_fourth_class && setType('fourth')}
        >
          <FourthClass fill={coachType === 'fourth' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'fourth' })}>
            Сидячий
          </span>
        </div>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_third_class })}
          onClick={() => routeInfo.have_third_class && setType('third')}
        >
          <ThirdClass fill={coachType === 'third' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'third' })}>
            Плацкарт
          </span>
        </div>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_second_class })}
          onClick={() => routeInfo.have_second_class && setType('second')}
        >
          <SecondClass fill={coachType === 'second' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'second' })}>Купе</span>
        </div>
        <div
          className={cn(s['vertical-container'], { [s['disable']]: !routeInfo.have_first_class })}
          onClick={() => routeInfo.have_first_class && setType('first')}
        >
          <FirstClass fill={coachType === 'first' ? '#FFA800' : '#C4C4C4'} />
          <span className={cn(s['typeName'], { [s['active']]: coachType === 'first' })}>Люкс</span>
        </div>
      </div>
    </div>
  );
};
