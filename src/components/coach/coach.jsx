import React from 'react';
import s from './coach.module.css';
import { CoachOptionButtons } from '../coachOptionButton/CoachOptionButtons';
import { CoachScheme } from '../../components/coachScheme/CoachScheme';

export const Coach = ({ coachInfo, seats, setSeats }) => {

  const availableSeats = (function (coachInfo) {
    if (coachInfo.coach.class_type === 'first' || coachInfo.coach.class_type === 'fourth') {
      return coachInfo.seats.reduce((sum, seat) => {
        if (seat.available) {
          sum.seats ? (sum.seats += 1) : (sum.seats = 1);
          return sum;
        } else return sum;
      }, {});
    } else {
      return coachInfo.seats.reduce((sum, seat) => {
        if (seat.available && seat.index % 2 === 0) {
          sum.topSeats ? (sum.topSeats += 1) : (sum.topSeats = 1);
          sum.seats ? (sum.seats += 1) : (sum.seats = 1);
          return sum;
        } else if (seat.available && seat.index % 2 !== 0)
          sum.bottomSeats ? (sum.bottomSeats += 1) : (sum.bottomSeats = 1);
        sum.seats ? (sum.seats += 1) : (sum.seats = 1);
        return sum;
      }, {});
    }
  })(coachInfo);

  return (
    <div>
      <div className={s['info']}>
        <div className={s['coachNumberContainer']}>
          <span className={s['coachNumberBig']}>
            {coachInfo.coach._id.slice(-4)}
          </span>
          <span className={s['coachNumberText']}>вагон</span>
        </div>
        <div className={s['seatsQuantityContainer']}>
          <div>
            <span className={s['blockSubtitle']}>Места </span>
            <span className={s['seatsQuantitySmall']}>
              {availableSeats.seats}
            </span>
          </div>
          {(coachInfo.coach.class_type === 'second' ||
            coachInfo.coach.class_type === 'third') && (
            <>
              <div>
                <span className={s['blockText']}>Верхние </span>
                <span className={s['seatsQuantityBig']}>
                  {availableSeats.topSeats}
                </span>
              </div>
              <div>
                <span className={s['blockText']}>Нижние </span>
                <span className={s['seatsQuantityBig']}>
                  {availableSeats.bottomSeats}
                </span>
              </div>
            </>
          )}
        </div>
        <div className={s['priceSeatsContainer']}>
          <span className={s['blockSubtitle']}>Стоимость</span>
          {coachInfo.coach.class_type === 'first' ||
          coachInfo.coach.class_type === 'fourth' ? (
            <div>
              <span className={s['priceSeats']}>
                {Intl.NumberFormat('ru-RU').format(coachInfo.coach.top_price)}{' '}
              </span>
              <span className={s['currency']}>₽</span>
            </div>
          ) : (
            <>
              <div>
                <span className={s['priceSeats']}>
                  {Intl.NumberFormat('ru-RU').format(coachInfo.coach.top_price)}{' '}
                </span>
                <span className={s['currency']}>₽</span>
              </div>
              <div>
                <span className={s['priceSeats']}>
                  {Intl.NumberFormat('ru-RU').format(
                    coachInfo.coach.bottom_price
                  )}{' '}
                </span>
                <span className={s['currency']}>₽</span>
              </div>
            </>
          )}
        </div>
        <div className={s['optionsContainer']}>
          <span className={s['blockSubtitle']}>Обслуживание ФПК</span>
          <CoachOptionButtons coachInfo={coachInfo.coach} />
        </div>
      </div>
      <CoachScheme coachInfo={coachInfo} seats={seats} setSeats={setSeats} />
    </div>
  );
};
