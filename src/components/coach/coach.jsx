import React from 'react';
import s from './coach.module.css';
import { ReactComponent as Conditioner } from './../../images/Conditioner.svg';
import { ReactComponent as Wifi } from './../../images/Wi-fi.svg';
import { ReactComponent as Nutrition } from './../../images/Nutrition.svg';
import { ReactComponent as Linens } from './../../images/Linens.svg';

export const Coach = ({ coach }) => {

  return (
    <div>
      <div className={s['info']}>
        <div className={s['coachNumberContainer']}>
          <span className={s['coachNumberBig']}>{coach.coach._id.slice(-4)}</span>
          <span className={s['coachNumberText']}>вагон</span>
        </div>
        <div className={s['seatsQuantityContainer']}>
          <div>
            <span className={s['blockSubtitle']}>Места </span>
            <span className={s['seatsQuantitySmall']}>22</span>
          </div>
          <div>
            <span className={s['blockText']}>Верхние </span>
            <span className={s['seatsQuantityBig']}>12</span>
          </div>
          <div>
            <span className={s['blockText']}>Нижние </span>
            <span className={s['seatsQuantityBig']}>10</span>
          </div>
        </div>
        <div className={s['priceSeatsContainer']}>
          <span className={s['blockSubtitle']}>Стоимость</span>
          <div>
            <span className={s['priceSeats']}>2 020 </span>
            <span className={s['currency']}>₽</span>
          </div>
          <div>
            <span className={s['priceSeats']}>2 032 </span>
            <span className={s['currency']}>₽</span>
          </div>
        </div>
        <div className={s['optionsContainer']}>
          <span className={s['blockSubtitle']}>Обслуживание ФПК</span>
          <div className={s['options']}>
            <span className={s['option']}>
              <Conditioner />
            </span>
            <span className={s['option']}>
              <Wifi />
            </span>
            <span className={s['option']}>
              <Linens />
            </span>
            <span className={s['option']}>
              <Nutrition />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};