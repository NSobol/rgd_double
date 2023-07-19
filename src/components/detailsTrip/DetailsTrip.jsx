import React, { useState } from 'react';
import { ReactComponent as There } from './../../images/There.svg';
import { ReactComponent as Back } from './../../images/Back.svg';
import { ReactComponent as Plus } from './../../images/plus.svg';
import { ReactComponent as Minus } from './../../images/minus.svg';
import { ReactComponent as User } from './../../images/user.svg';
import s from './detailsTrip.module.css';

export const DetailsTrip = () => {
  const [isActive, setIsActive] = useState(false);
  const [opened, setOpened] = useState(false);
  const [show, setShow] = useState(false);
  const sum = 7760;

  return (
    <section className={s.details}>
      <div className='header'>
        <h3 className={s['details-title']}>Детали поездки</h3>
      </div>
      <div className={s['block-container']}>
        <div className={s['block']}>
          <There />
          <p>Туда</p>
        </div>
        <div onClick={() => setIsActive(!isActive)}>
          {isActive ? <Minus /> : <Plus />}
        </div>
      </div>
      <div className={s['block-container']}>
        <div className={s['block']}>
          <Back />
          <p>Обратно</p>
        </div>
        <div onClick={() => setOpened(!opened)}>
          {opened ? <Minus /> : <Plus />}
        </div>
      </div>
      <div className={s['block-container']}>
        <div className={s['block']}>
          <User />
          <p>Пассажиры</p>
        </div>
        <div onClick={() => setShow(!show)}>
          {show ? <Minus /> : <Plus />}
        </div>
      </div>
      <div className={s.footer}>
        <p>Итог</p>
        <p>
          <span>{sum} </span>&#8381;
        </p>
      </div>
    </section>
  );
};
