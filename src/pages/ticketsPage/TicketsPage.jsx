import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoach, getTrains, setFilter } from '../../storage/slices/trainSlice';
import { RouteDetails } from '../../components/routeDetails/routeDetails';
import { TicketsQuantity } from '../../components/ticketsQuantity/ticketsQuantity';
import { Header } from '../../components/headerBlock/header/Header';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import s from './tickets.module.css';
import { Crumbs } from '../../components/crumbs/Crumbs';
import { CoachTypeSelect } from '../../components/coachTypeSelect/coachTypeSelect';
import { useNavigate } from 'react-router';
import { DetailsFilter } from '../../components/detailsFilter/DetailsFilter';

export const TicketsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTransition = () => {
    navigate('/stepthree');
  };
  const {
    filters,
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

  // DEV тест переключателя фильтров
  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
    dispatch(getTrains());
  };

  return (
    <div>
      <Header />
      <Crumbs progress={2} />
      <div className={s.container}>
        <DetailsFilter />
        <div className={s.ticketsBlock}>
          <div className={s['filters']}>
            <div className={s['filter']}>
              <button onClick={() => handleFilter('have_first_class')}>
                Люкс
              </button>
              <span>{filters.have_first_class ? 'Да' : 'Нет'}</span>
            </div>
            <div className={s['filter']}>
              <button onClick={() => handleFilter('have_second_class')}>
                Купе
              </button>
              <span>{filters.have_second_class ? 'Да' : 'Нет'}</span>
            </div>
            <div className={s['filter']}>
              <button onClick={() => handleFilter('have_third_class')}>
                Плацкарт
              </button>
              <span>{filters.have_third_class ? 'Да' : 'Нет'}</span>
            </div>
            <div className={s['filter']}>
              <button onClick={() => handleFilter('have_fourth_class')}>
                Сидячий
              </button>
              <span>{filters.have_fourth_class ? 'Да' : 'Нет'}</span>
            </div>
          </div>
          <RouteDetails
            direction={'departure'}
            routeInfo={currentRoute.departure}
          />
          <TicketsQuantity />
          <CoachTypeSelect
            routeInfo={currentRoute.departure}
            direction={'departure'}
          />
          {!!departureCoach.length &&
            departureCoach.map(({ coach }, i) => (
              <div key={i}>
                <p>{coach.name}</p>
                <p>{coach.class_type}</p>
              </div>
            ))}
          <hr />
          {!!departureFilteredCoach.length &&
            !!departureCoachType &&
            departureFilteredCoach.map(({ coach }, i) => (
              <div key={i}>
                <p>{coach.name}</p>
                <p>{coach.class_type}</p>
              </div>
            ))}
          {currentRoute.arrival && (
            <>
              <RouteDetails
                direction={'arrival'}
                routeInfo={currentRoute.arrival}
              />
              <TicketsQuantity />
              <CoachTypeSelect
                routeInfo={currentRoute.arrival}
                direction={'arrival'}
              />
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
          <button onClick={getTransition}>Далее</button>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};
