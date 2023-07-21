import React from 'react';
import s from './routeDetails.module.css';
import { ReactComponent as Train } from '../../images/Train.svg';
import { ReactComponent as Clock } from '../../images/Clock.svg';
import { ReactComponent as ArrowR } from '../../images/ArrowR.svg';
import { ReactComponent as ArrowL } from '../../images/ArrowL.svg';

export const RouteDetails = ({direction, routeInfo}) => {
  //вытащить в утилки
  const getTime = (dateInMS) => {
    const date = new Date (dateInMS);
    return date.getHours() + ':' + date.getMinutes()
  }
  // сделать нормальное окончание
  const getHour = (dateInMS) => {
    const date = new Date (dateInMS);
    return date.getHours() + ' часов'
  }

  const getMinutes = (dateInMS) => {
    const date = new Date (dateInMS);
    return date.getMinutes() + ' минут'
  }

  return (
    <div className={s['routeDetails']}>
      <div className={s['routeDetails__container_horisontal']}>
        <div className={s['routeDetails__container_vertical']}>
          <Train />
        </div>
        <div className={s['routeDetails__container_vertical']}>
          <span className={s['trainName']}>{routeInfo.train.name}</span>
          <span className={s['cityName']}>{routeInfo.from.city.name}</span>
          <span className={s['cityName']}>{routeInfo.to.city.name}</span>
        </div>
      </div>
      <div className={s['routeDetails__container_vertical']}>
        <span className={s['time']}>{getTime(routeInfo.from.datetime)}</span>
        <span className={s['cityName']}>{routeInfo.from.city.name}</span>
        <span className={s['stationName']}>{routeInfo.from.railway_station_name}</span>
      </div>
      <div className={s['routeDetails__container_vertical']}>
          {direction === 'to' ? <ArrowR /> : <ArrowL />}
      </div>
      <div className={s['routeDetails__container_vertical']}>
        <span className={s['time']}>{getTime(routeInfo.to.datetime)}</span>
        <span className={s['cityName']}>{routeInfo.to.city.name}</span>
        <span className={s['stationName']}>{routeInfo.to.railway_station_name}</span>
      </div>
      <div className={s['routeDetails__container_horisontal']}>
        <div className={s['routeDetails__container_vertical']}>
          <Clock />
        </div>
        <div className={s['routeDetails__container_vertical']}>
          <span className={s['travelTime']}>{getHour(routeInfo.to.datetime)}</span>
          <span className={s['travelTime']}>{getMinutes(routeInfo.to.datetime)}</span>
        </div>
      </div>
    </div>
  );
};