import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoach } from '../../storage/slices/trainSlice';
import { RouteDetails } from '../../components/routeDetails/routeDetails';
import { TicketsQuantity } from '../../components/ticketsQuantity/ticketsQuantity';
import { CoachTypeSelect } from '../../components/coachTypeSelect/coachTypeSelect';
import { CoachSelector } from '../../components/coachSelector/CoachSelector';
import { Coach} from '../../components/coach/coach';
import s from './tickets.module.css';
import { Crumbs } from '../../components/crumbs/Crumbs';
import { DetailsFilter } from '../../components/detailsFilter/DetailsFilter';
import { useNavigate } from 'react-router-dom';
import { setSeatsInfo } from '../../storage/slices/orderSlice';

export const TicketsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentRoute, departureCoaches, arrivalCoaches } = useSelector((s) => s.trains);

  const [departureSeats, setDepartureSeats] = useState([]);
  const [departureCoachType, setDepartureCoachType] = useState('');
  const [departureFilteredCoaches, setDepartureFilteredCoaches] = useState([]);
  const [departureSelectedCoaches, setDepartureSelectedCoaches] = useState([]);
  const [arrivalSeats, setArrivalSeats] = useState([]);
  const [arrivalCoachType, setArrivalCoachType] = useState('');
  const [arrivalFilteredCoaches, setArrivalFilteredCoaches] = useState([]);
  const [arrivalSelectedCoaches, setArrivalSelectedCoaches] = useState([]);

const getTransition = () => {
  if(currentRoute.arrival) {
    if (!arrivalSeats.length || !departureSeats.length) {
      alert('Выберите количество билетов и места')
    } else if ((arrivalSeats.find(el => el.coach_id === '' || el.seat_number === 0) || departureSeats.find(el => el.coach_id === '' || el.seat_number === 0))) {
      alert('Выберите места')
    } else {
      dispatch(setSeatsInfo({currentRoute, departureSeats, arrivalSeats}))
      navigate('/stepthree');
    }
  } else {
    if (!departureSeats.length) {
      alert('Выберите количество билетов и места')
    } else if (departureSeats.find(el => el.coach_id === '' || el.seat_number === 0)) {
      alert('Выберите места')
    } else {
      dispatch(setSeatsInfo({currentRoute, departureSeats, arrivalSeats}))
      navigate('/stepthree');
    }
  }
};

useEffect(() => {
  dispatch(getCoach(currentRoute));
}, [dispatch, currentRoute]);

useEffect(() => {
  if (!departureCoachType) return
    setDepartureFilteredCoaches(departureCoaches.filter(el => el.coach.class_type === departureCoachType))
  }, [departureCoaches, departureCoachType])

useEffect(() => {
  if (!arrivalCoachType) return
  setArrivalFilteredCoaches(arrivalCoaches.filter(el => el.coach.class_type === arrivalCoachType))
  }, [arrivalCoaches, arrivalCoachType])

  return (
    <div>
      <Crumbs progress={2} />
      <div className={s.container}>
        <DetailsFilter />
        <div className={s.ticketsBlock}>
          <h1>ВЫБОР МЕСТ</h1>
          <div className={s.routeBlock}>
            <div className={s.backButtonBlock}>
              <button>Выбрать другой поезд</button>
            </div>
            <RouteDetails direction={'departure'} routeInfo={currentRoute.departure} />
            <TicketsQuantity getTicketsQuantity={setDepartureSeats} />
            <CoachTypeSelect routeInfo={currentRoute.departure} getCoachType={setDepartureCoachType}/>
            {!!departureFilteredCoaches.length && !!departureCoachType && (
            <CoachSelector coaches={departureFilteredCoaches} setSelectedCoaches={setDepartureSelectedCoaches} />
            )}
            {!!departureSelectedCoaches.length && departureSelectedCoaches.map((coachInfo) => (
              <Coach coachInfo={coachInfo} key={coachInfo.coach._id} seats={departureSeats} setSeats={setDepartureSeats} />
            ))}
          </div>
          {currentRoute.arrival && (
          <div className={s.routeBlock}>
            <div className={s.backButtonBlock}>
              <button>Выбрать другой поезд</button>
            </div>
            <RouteDetails direction={'arrival'} routeInfo={currentRoute.arrival} />
            <TicketsQuantity getTicketsQuantity={setArrivalSeats} />
            <CoachTypeSelect routeInfo={currentRoute.arrival} getCoachType={setArrivalCoachType}/>
            {!!arrivalFilteredCoaches.length && !!arrivalCoachType && (
            <CoachSelector coaches={arrivalFilteredCoaches} setSelectedCoaches={setArrivalSelectedCoaches} />
            )}
            {!!arrivalSelectedCoaches.length && arrivalSelectedCoaches.map((coachInfo) => (
              <Coach coachInfo={coachInfo} key={coachInfo.coach._id} seats={arrivalSeats} setSeats={setArrivalSeats} />
            ))}
          </div>
          )}
          <button className={s['ticketsFull-button']} onClick={getTransition}>Далее</button>
        </div>
      </div>
    </div>
  );
};
