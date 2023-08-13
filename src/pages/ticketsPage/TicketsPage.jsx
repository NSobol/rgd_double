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
import { setSeatsInfo } from '../../storage/slices/orderSlice';


export const TicketsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    currentRoute,
    departureCoachType,
    departureFilteredCoaches,
    departureSelectedCoaches,
    departure,
    arrivalCoachType,
    arrivalFilteredCoaches,
    arrivalSelectedCoaches,
    arrival,
  } = useSelector((s) => s.trains);

  const getTransition = () => {
    dispatch(setSeatsInfo({currentRoute, departure, arrival}))
    navigate('/stepthree');
  };

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
            departureSelectedCoaches.map((coach) => (
              <Coach coach={coach} key={coach.coach._id} direction={'departure'} />
            ))}
          {currentRoute.arrival && (
            <>
              <RouteDetails direction={'arrival'} routeInfo={currentRoute.arrival} />
              <TicketsQuantity />
              <CoachTypeSelect routeInfo={currentRoute.arrival} direction={'arrival'} />
            </>
          )}
          {!!arrivalFilteredCoaches.length && !!arrivalCoachType && <CoachSelector coaches={arrivalFilteredCoaches} direction={'arrival'} />}
          {!!arrivalSelectedCoaches.length &&
            !!arrivalCoachType &&
            arrivalSelectedCoaches.map((coach) => (
              <Coach coach={coach} key={coach.coach._id} direction={'arrival'} />
            ))}
          <button className={s['ticketsFull-button']} onClick={getTransition}>
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};
