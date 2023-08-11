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
import { CoachSelector } from '../../components/coachSelector/CoachSelector';


export const TicketsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTransition = () => {
    navigate('/stepthree');
  };
  const {
    currentRoute,
    departureCoaches,
    departureCoachType,
    departureFilteredCoaches,
    departureSelectedCoaches,
    arrivalCoaches,
    arrivalCoachType,
    arrivalFilteredCoaches,
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
          {!!departureFilteredCoaches.length && !!departureCoachType && (
            <CoachSelector coaches={departureFilteredCoaches} direction={'departure'} />
          )}
          {!!departureSelectedCoaches.length &&
            !!departureCoachType &&
            departureSelectedCoaches.map((coach, i) => (
              <Coach coach={coach} key={`${i}departureSelectedCoaches`} />
            ))}
          {/* {currentRoute.arrival && (
            <>
              <RouteDetails direction={'arrival'} routeInfo={currentRoute.arrival} />
              <TicketsQuantity />
              <CoachTypeSelect routeInfo={currentRoute.arrival} direction={'arrival'} />
            </>
          )}
          {!!arrivalCoaches.length &&
            arrivalCoaches.map(({ coach }, i) => (
              <div key={`${i}arrivalCoaches`}>
                <p>{coach.name}</p>
                <p>{coach.class_type}</p>
              </div>
            ))}
          <hr />
          {!!arrivalFilteredCoaches.length &&
            !!arrivalCoachType &&
            arrivalFilteredCoaches.map(({ coach }, i) => (
              <div key={i}>
                <p>{coach.name}</p>
                <p>{coach.class_type}</p>
              </div>
            ))} */}
          <button className={s['ticketsFull-button']} onClick={getTransition}>
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};
