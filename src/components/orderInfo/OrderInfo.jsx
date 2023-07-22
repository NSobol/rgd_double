import React from 'react';
import s from './orderInfo.module.css';
import { Train } from '../train/Train';
import { useNavigate } from 'react-router';

export const OrderInfo = () => {
  const navigate = useNavigate();

  const getTransition = () => {
    navigate('/fulorder');
  };
  return (
    <div>
      <div>
        <h2>Поезд</h2>
        <div>
          {/* <Train /> */}
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
