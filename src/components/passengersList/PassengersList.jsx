import React from 'react';
import s from './passengersList.module.css';
import { Passenger } from '../passenger/Passenger';
import { useNavigate } from 'react-router';

export const PassengersList = () => {
  const tickets = [1, 2];
  const navigate = useNavigate();

  const getTransition = () => {
    navigate('/payment');
  }

  return (
    <div>
      <div className={s.accordion}>
        {tickets.map((item, i) => (
          <Passenger key={i} opened={i} index={i} item={item} />
        ))}
      </div>
      <button className={s['passengers-button'] } onClick={getTransition}>Далее</button>
    </div>
  );
};
