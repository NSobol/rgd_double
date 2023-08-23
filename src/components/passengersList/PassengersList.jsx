import React from 'react';
import s from './passengersList.module.css';
import { Passenger } from '../passenger/Passenger';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonInfo } from './../../storage/slices/orderSlice';

export const PassengersList = () => {

  const tickets = useSelector((s) => s.order.departure.seats);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTransition = () => {
    navigate('/payment');
  };
  const test = (data, i) => {
    dispatch(setPersonInfo({ data, i }));
  };

  return (
    <div>
      <div className={s.accordion}>
        {tickets.map((item, i) => (
          <Passenger
            key={i}
            index={i}
            item={item}
            id={`pass${i + 1}`}
            test={test}
            isLast={i === tickets.length - 1}
          />
        ))}
      </div>
      <button className={s['passengers-button']} onClick={getTransition}>
        Далее
      </button>
    </div>
  );
};
