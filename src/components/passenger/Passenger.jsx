import React, { useState } from 'react';
import { ReactComponent as Clouse } from './../../images/clouse.svg';
import { ReactComponent as Plus } from './../../images/plusCircle.svg';
import { ReactComponent as Minus } from './../../images/minusCircle.svg';
import s from './passenger.module.css';
import { PassengerForm } from '../passengerForm/passengerForm';

export const Passenger = ({ index, id, test, item, isLast }) => {
  const [opened, setOpened] = useState(false);
  const isTitleActive = opened ? 'active' : 'accordionTitle';
  const isActive = opened ? 'content show' : 'content';

  return (
    <div id={id} className={s.accordionItem}>
      <div className={s[`${isTitleActive}`]} onClick={() => setOpened(!opened)}>
        <div className={s.container}>
          <div className={s.icon}>{opened ? <Minus /> : <Plus />}</div>
          <h2 className={s.title}>Пассажир №{index + 1}</h2>
        </div>
        {opened && (
          <Clouse className={s.clouse} onClick={() => setOpened(!opened)} />
        )}
      </div>
      <div className={s[`${isActive}`]}>
        <PassengerForm test={test} info={item.person_info} index={index} isLast={isLast} />
      </div>
    </div>
  );
};
