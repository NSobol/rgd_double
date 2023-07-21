import React from 'react';
import s from './routeDetails.module.css';
import { ReactComponent as Train } from '../../images/Train.svg';
import { ReactComponent as Clock } from '../../images/Clock.svg';
import { ReactComponent as ArrowR } from '../../images/ArrowR.svg';
import { ReactComponent as ArrowL } from '../../images/ArrowL.svg';
import dayjs from 'dayjs';
const duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

export const RouteDetails = ({direction, routeInfo}) => {
  const travelTime = dayjs.duration(routeInfo.departure.duration * 1000)

  //вытащить в утилки
  const getTime = (dateInMS) => {
    const date = new Date (dateInMS * 1000);
    return date.getHours() + ':' + date.getMinutes()
  }

  return (
    <div className={s['routeDetails']}>
      <div className={s['routeDetails__container_horisontal']}>
        <div className={s['routeDetails__container_vertical']}>
          <Train />
        </div>
        <div className={s['routeDetails__container_vertical']}>
          <span className={s['trainName']}>{routeInfo.departure.train._id.slice(-4)}</span>
          <span className={s['cityName']}>{routeInfo.departure.from.city.name}</span>
          <span className={s['cityName']}>{routeInfo.departure.to.city.name}</span>
        </div>
      </div>
      <div className={s['routeDetails__container_vertical']}>
        <span className={s['time']}>{getTime(routeInfo.departure.from.datetime)}</span>
        <span className={s['cityName']}>{routeInfo.departure.from.city.name}</span>
        <span className={s['stationName']}>{routeInfo.departure.from.railway_station_name}</span>
      </div>
      <div className={s['routeDetails__container_vertical']}>
          {direction === 'to' ? <ArrowR /> : <ArrowL />}
      </div>
      <div className={s['routeDetails__container_vertical']}>
        <span className={s['time']}>{getTime(routeInfo.departure.to.datetime)}</span>
        <span className={s['cityName']}>{routeInfo.departure.to.city.name}</span>
        <span className={s['stationName']}>{routeInfo.departure.to.railway_station_name}</span>
      </div>
      <div className={s['routeDetails__container_horisontal']}>
        <div className={s['routeDetails__container_vertical']}>
          <Clock />
        </div>
        <div className={s['routeDetails__container_vertical']}>
          <span className={s['travelTime']}>{travelTime.$d.days} дня</span>
          <span className={s['travelTime']}>{travelTime.$d.hours} часов</span>
          <span className={s['travelTime']}>{travelTime.$d.minutes} минут</span>
        </div>
      </div>
    </div>
  );
};