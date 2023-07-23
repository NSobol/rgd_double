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
  const travelTime = dayjs.duration(routeInfo.duration * 1000)

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
          <span className={s['trainName']}>{routeInfo.train._id.slice(-4)}</span>
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
          {direction === 'departure' ? <ArrowR /> : <ArrowL />}
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
          <span className={s['travelTime']}>{travelTime.$d.days} дня</span>
          <span className={s['travelTime']}>{travelTime.$d.hours} часов</span>
          <span className={s['travelTime']}>{travelTime.$d.minutes} минут</span>
        </div>
      </div>
    </div>
  );
};