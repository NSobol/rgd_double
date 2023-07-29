import React, { useEffect } from 'react';
// import s from './orderInfo.module.css';
// import { Train } from '../train/Train';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export const OrderInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentRoute = useSelector((s) => s.trains.currentRoute);
  console.log(currentRoute);
  useEffect(() => {
    dispatch((s) => s.currentRoute);
  }, [dispatch, currentRoute]);

  const getTransition = () => {
    navigate('/fulorder');
  };
  return (
    <div>
      <div>
        <h2>Поезд</h2>
        <div>
          {/* <Train item={currentRoute} duration={duration} /> */}
          <button>Изменить</button>
        </div>
      </div>
      <div>
        <h2>Пассажиры</h2>
        <div>
          <div></div>
          <div>
            <button>Изменить</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Способ оплаты</h2>
        <div>
          <div></div>
          <div>
            <button>Изменить</button>
          </div>
        </div>
      </div>
      <button onClick={getTransition}>Подтвердить</button>
    </div>
  );
};
