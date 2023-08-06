import React, { useState } from 'react';
import s from './passengersList.module.css';
import { Passenger } from '../passenger/Passenger';
import { useNavigate } from 'react-router';

export const PassengersList = () => {
  const [checked, setChecked] = useState(false);

  const tickets = [1, 2];
  const navigate = useNavigate();

  const getTransition = () => {
    navigate('/payment');
  };

  function getChecked () { 
    setChecked(!checked);
  }

  return (
    <div>
      <div className={s.accordion}>
        {tickets.map((item, i) => (
          <Passenger
            key={i}
            opened={i}
            index={i}
            item={item}
            checked={checked}
            getChecked={getChecked}
          />
        ))}
      </div>
      <button className={s['passengers-button']} onClick={getTransition}>
        Далее
      </button>
    </div>
  );
};
