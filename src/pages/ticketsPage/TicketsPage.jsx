import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoach, setFilter } from '../../storage/slices/trainSlice';
import { RouteDetails } from '../../components/routeDetails/routeDetails';
import { TicketsQuantity } from '../../components/ticketsQuantity/ticketsQuantity';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { DetailsTrip } from '../../components/detailsTrip/DetailsTrip';
import s from './tickets.module.css';
import { Crumbs } from '../../components/crumbs/Crumbs';
import { CoachTypeSelect } from '../../components/coachTypeSelect/coachTypeSelect';
import { useNavigate } from 'react-router';

export const TicketsPage = () => {
   const navigate = useNavigate();

  const getTransition = () => {
    navigate('/stepthree');
  };
  const { currentRoute, departureCoach } = useSelector((s) => s.trains);
  console.log('currentRoute', currentRoute);
  console.log('departureCoach', departureCoach);
  const dispatch = useDispatch();
  // DEV тест запроса мест
  const getS = () => {
    dispatch(getCoach('64103b2f5c49ea0046358ef8'));
  };

  // DEV тест переключателя фильтров
  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <Header />
      <Crumbs progress={2} />
      <div className={s.container}>
        <DetailsTrip />
        <div className={s.ticketsBlock}>
          <button onClick={getS}>getSeats</button>
          <button onClick={() => handleFilter('have_first_class')}>
            have_first_class
          </button>
          <RouteDetails direction={'to'} routeInfo={currentRoute.departure} />
          <TicketsQuantity />
          <CoachTypeSelect
            routeInfo={currentRoute.departure}
            direction={'departure'}
          />
          <button onClick={getTransition}>Далее</button>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};
