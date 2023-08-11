import React from 'react';
import s from './coach.module.css';
import { CoachOptionButtons } from '../coachOptionButton/CoachOptionButtons';

export const Coach = ({ coach }) => {
  
  const getTopSeats = (coach) => {
    return coach.seats.reduce((sum, seat) => {
      if (seat.available && seat.index % 2 === 0) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
  };

  const getBottomSeats = (coach) => {
    return coach.seats.reduce((sum, seat) => {
      if (seat.available && seat.index % 2 !== 0) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
  };

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
            <span className={s['seatsQuantitySmall']}>{coach.coach.available_seats}</span>
          </div>
          <div>
            <span className={s['blockText']}>Верхние </span>
            <span className={s['seatsQuantityBig']}>{getTopSeats(coach)}</span>
          </div>
          <div>
            <span className={s['blockText']}>Нижние </span>
            <span className={s['seatsQuantityBig']}>{getBottomSeats(coach)}</span>
          </div>
        </div>
        <div className={s['priceSeatsContainer']}>
          <span className={s['blockSubtitle']}>Стоимость</span>
          <div>
            <span className={s['priceSeats']}>
              {Intl.NumberFormat('ru-RU').format(coach.coach.top_price)}{' '}
            </span>
            <span className={s['currency']}>₽</span>
          </div>
          <div>
            <span className={s['priceSeats']}>
              {Intl.NumberFormat('ru-RU').format(coach.coach.bottom_price)}{' '}
            </span>
            <span className={s['currency']}>₽</span>
          </div>
        </div>
        <div className={s['optionsContainer']}>
          <span className={s['blockSubtitle']}>Обслуживание ФПК</span>
          <CoachOptionButtons coachInfo={coach.coach} />
        </div>
      </div>
    </div>
  );
};
