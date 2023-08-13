import React from 'react';
import s from './passengersList.module.css';
import { Passenger } from '../passenger/Passenger';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export const PassengersList = () => {
  // const tickets = [
  //   {
  //     coach_id: '641037ec5c49ea004632f165',
  //     person_info: {
  //       is_adult: true,
  //       first_name: 'Андрей',
  //       last_name: 'Каптурин',
  //       patronymic: 'Алексеевич',
  //       gender: true,
  //       birthday: 'string',
  //       document_type: 'string',
  //       document_data: 'string',
  //     },
  //     seat_number: 23,
  //     is_child: false,
  //     include_children_seat: true,
  //   },
  //   {
  //     coach_id: '641037ec5c49ea004632f165',
  //     person_info: {
  //       is_adult: false,
  //       first_name: 'Андрей',
  //       last_name: 'Каптурин',
  //       patronymic: 'Алексеевич',
  //       gender: true,
  //       birthday: 'string',
  //       document_type: 'string',
  //       document_data: 'string',
  //     },
  //     seat_number: 22,
  //     is_child: true,
  //     include_children_seat: false,
  //   },
  // ];

  const tickets = useSelector((s) => s.order.departure.seats);
  const navigate = useNavigate();

  const getTransition = () => {
    navigate('/payment');
  };
  const test = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className={s.accordion}>
        {tickets.map((item, i) => (
          <Passenger
            key={i}
            index={i}
            item={item}
            id={`pass${i}`}
            test={test}
          />
        ))}
      </div>
      <button className={s['passengers-button']} onClick={getTransition}>
        Далее
      </button>
    </div>
  );
};
