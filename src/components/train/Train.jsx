import React from 'react';
import { ReactComponent as Loco } from './../../images/loco.svg';
import { ReactComponent as Icons } from './../../images/iconGroup.svg';
import { ReactComponent as ArrowR } from '../../images/ArrowR.svg';
import { ReactComponent as ArrowL } from '../../images/ArrowL.svg';
import s from './train.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectRoute } from '../../storage/slices/trainSlice';
import dayjs from 'dayjs';
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export const Train = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const departure = item.departure;
  const arrival = item?.arrival ? item.arrival : {};
  console.log(arrival);

  const onSelect = () => {
    dispatch(selectRoute(item));
    navigate('/steptwo');
  };

  const travelTime = dayjs.duration(departure.duration * 1000);

  const getTime = (dateInMS) => {
    const date = new Date(dateInMS * 1000);
    return date.getHours() + ':' + date.getMinutes();
  };
  return (
    <div className={s.container}>
      <div className={s.header}>
        <Loco className={s['header-icon']} />
        <p className={s['header-number']}>{departure.train._id.slice(-4)}</p>
        <p className={s['header-route']}>
          {departure.from.city.name} &#10230; <br />
          {departure.to.city.name}
        </p>
      </div>
      <div className={s.main}>
        <div className={s['route-container-from']}>
          <span className={s['time']}>{getTime(departure.from.datetime)}</span>
          <span className={s['cityName']}>{departure.from.city.name}</span>
          <span className={s['stationName']}>
            {departure.from.railway_station_name}
          </span>
        </div>
        <div className={s['route-container']}>
          <div className={s['route-container-time']}>
            <span className={s['travelTime']}>{travelTime.$d.days} дня</span>
            <span className={s['travelTime']}>{travelTime.$d.hours} часов</span>
            <span className={s['travelTime']}>
              {travelTime.$d.minutes} минут
            </span>
          </div>
          <ArrowR />
        </div>
        <div className={s['route-container-to']}>
          <span className={s['time']}>{getTime(departure.to.datetime)}</span>
          <span className={s['cityName']}>{departure.to.city.name}</span>
          <span className={s['stationName']}>
            {departure.to.railway_station_name}
          </span>
        </div>
      </div>
      <div className={s.footer}>
        <Icons className={s['footer-icon']} />
        <br />
        <button onClick={onSelect} className={s['footer-button']}>
          Выбрать места
        </button>
      </div>
    </div>
  );
};
