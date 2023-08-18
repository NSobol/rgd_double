import React, { useEffect } from 'react';
import s from './orderInfo.module.css';
import { Train } from '../train/Train';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setOrderNumber } from '../../storage/slices/orderSlice';
import { CardPassenger } from '../cardPassenger/CardPassenger';
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export const OrderInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentRoute = useSelector((s) => s.trains.currentRoute);
  const order = useSelector((s) => s.order);
  console.log(order);
  const payment = order.user.payment_method;
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const order_number = `${randomIntFromInterval(1000, 100000)}`;

  const getTransition = () => {
    dispatch(setOrderNumber(order_number));
    navigate('/fulorder');
  };

  useEffect(() => {
    dispatch((s) => s.currentRoute);
  }, [dispatch, currentRoute]);

  return (
    <div>
      <div className={s['block']}>
        <h2 className={s['block-title']}>Поезд</h2>
        <div className={s['block-content']}>
          <Train item={currentRoute} type='order' />
        </div>
      </div>
      <div className={s['block']}>
        <h2 className={s['block-title']}>Пассажиры</h2>
        <div className={s['block-content']}>
          <div className={s['block-content-main']}>
            {order.departure.seats.map((item, i) => (
              <CardPassenger item={item.person_info} key={i} />
            ))}
          </div>
          <div className={s['block-content-footer']}>
            <button className={s['footer-button-new']}>Изменить</button>
          </div>
        </div>
      </div>
      <div className={s['block']}>
        <h2 className={s['block-title']}>Способ оплаты</h2>
        <div className={s['block-content']}>
          <div className={s['block-content-main']}>
            <span className={s['block-content-main-text']}>{payment}</span>
          </div>
          <div className={s['block-content-footer']}>
            <button className={s['footer-button-new']}>Изменить</button>
          </div>
        </div>
      </div>
      <button className={s['orderInfo-button']} onClick={getTransition}>
        Подтвердить
      </button>
    </div>
  );
};
