import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoach, setFilter } from '../../storage/slices/trainSlice';
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

  const getTransition = () => {
    navigate('/stepthree');
  };
  const { currentRoute, departureCoach, arrivalCoach, filters } = useSelector(
    (s) => s.trains
  );
  console.log('departureCoach', departureCoach);
  console.log('arrivalCoach', arrivalCoach);
  const dispatch = useDispatch();

  // DEV тест переключателя фильтров
  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
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
          <button onClick={getTransition}>Далее</button>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};
