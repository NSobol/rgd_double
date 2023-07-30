import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoach } from '../../storage/slices/trainSlice';
import { RouteDetails } from '../../components/routeDetails/routeDetails';
import { TicketsQuantity } from '../../components/ticketsQuantity/ticketsQuantity';
import s from './tickets.module.css';
import { Crumbs } from '../../components/crumbs/Crumbs';
import { CoachTypeSelect } from '../../components/coachTypeSelect/coachTypeSelect';
import { useNavigate } from 'react-router';
import { DetailsFilter } from '../../components/detailsFilter/DetailsFilter';
import { Coach } from '../../components/coach/coach';

export const TicketsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTransition = () => {
    navigate('/stepthree');
  };
  const {
    currentRoute,
    departureCoach,
    departureCoachType,
    departureFilteredCoach,
    arrivalCoach,
    arrivalCoachType,
    arrivalFilteredCoach,
  } = useSelector((s) => s.trains);

  useEffect(() => {
    dispatch(getCoach(currentRoute));
  }, [dispatch, currentRoute]);

  return (
    <div>
      <Crumbs progress={2} />
      <div className={s.container}>
        <DetailsFilter />
        <div className={s.ticketsBlock}>
          <RouteDetails direction={'departure'} routeInfo={currentRoute.departure} />
          <TicketsQuantity />
          <CoachTypeSelect routeInfo={currentRoute.departure} direction={'departure'} />
          {!!departureCoach.length &&
            departureCoach.map(({ coach }, i) => (
              <div key={i}>
                <p>{coach.name}</p>
                <p>{coach.class_type}</p>
              </div>
            ))}
          <hr />
          {!!departureFilteredCoach.length && !!departureCoachType && <Coach coach={departureFilteredCoach} />}
          {currentRoute.arrival && (
            <>
              <RouteDetails direction={'arrival'} routeInfo={currentRoute.arrival} />
              <TicketsQuantity />
              <CoachTypeSelect routeInfo={currentRoute.arrival} direction={'arrival'} />
            </>
          )}
          {!!arrivalCoach.length &&
            arrivalCoach.map(({ coach }, i) => (
              <div key={i}>
                <p>{coach.name}</p>
                <p>{coach.class_type}</p>
              </div>
            ))}
          <hr />
          {!!arrivalFilteredCoach.length &&
            !!arrivalCoachType &&
            arrivalFilteredCoach.map(({ coach }, i) => (
              <div key={i}>
                <p>{coach.name}</p>
                <p>{coach.class_type}</p>
              </div>
            ))}
          <button className={s['ticketsFull-button'] } onClick={getTransition}>Далее</button>
        </div>
      </div>
    </div>
  );
};
