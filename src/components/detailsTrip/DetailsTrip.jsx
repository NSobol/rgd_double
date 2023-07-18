import React from 'react';
import { ReactComponent as There } from './../../images/There.svg';
import { ReactComponent as Back } from './../../images/Back.svg';
import { ReactComponent as Plus } from './../../images/plus.svg';
import { ReactComponent as Minus } from './../../images/minus.svg';
import { ReactComponent as User } from './../../images/user.svg';
import s from './detailsTrip.module.css';

export const DetailsTrip = () => {
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
        <Plus />
      </div>
      <div className={s['block-container']}>
        <div className={s['block']}>
          <Back />
          <p>Обратно</p>
        </div>
        <Plus />
      </div>
      <div className={s['block-container']}>
        <div className={s['block']}>
          <User />
          <p>Пассажиры</p>
        </div>
        <Plus />
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
