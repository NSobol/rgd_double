import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeats, setFilter } from '../../storage/slices/trainSlice';
import { RouteDetails } from '../../components/routeDetails/routeDetails';
import { TicketsQuantity } from '../../components/ticketsQuantity/ticketsQuantity';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import { DetailsTrip } from '../../components/detailsTrip/DetailsTrip';
import s from './tickets.module.css';

export const TicketsPage = () => {
  const { currentRoute } = useSelector((s) => s.trains);
  const dispatch = useDispatch();
  // DEV тест запроса мест
  const getS = () => {
    dispatch(getSeats('64103b2f5c49ea0046358ef8'));
  };

  // DEV тест переключателя фильтров
  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <Header />
      <div className={s.container}>
        <DetailsTrip />
        <div className={s.ticketsBlock}>
          <button onClick={getS}>getSeats</button>
          <button onClick={() => handleFilter('have_first_class')}>
            have_first_class
          </button>
          <RouteDetails direction={'to'} routeInfo={currentRoute} />
          <TicketsQuantity />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};
