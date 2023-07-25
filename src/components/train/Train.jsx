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

  const onSelect = () => {
    dispatch(selectRoute(item));
    navigate('/steptwo');
  };

  const travelTime = dayjs.duration(departure.duration * 1000);

  const getTime = (dateInMS) => {
    const date = new Date(dateInMS * 1000);
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return date.getHours() + ':' + minutes;
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
        <div className={s['main-block']}>
          <div className={s['route-container-from']}>
            <span className={s['time']}>
              {getTime(departure.from.datetime)}
            </span>
            <span className={s['cityName']}>{departure.from.city.name}</span>
            <span className={s['stationName']}>
              {departure.from.railway_station_name}
            </span>
          </div>
          <div className={s['route-container']}>
            <div className={s['route-container-time']}>
              <span className={s['travelTime']}>
                {travelTime.$d.days}д : &ensp;
              </span>
              <span className={s['travelTime']}>
                {travelTime.$d.hours}ч :&ensp;
              </span>
              <span className={s['travelTime']}>{travelTime.$d.minutes}м</span>
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
        {arrival && (
          <div className={s['main-block']}>
            <div className={s['route-container-from']}>
              <span className={s['time']}>
                {getTime(arrival.from.datetime)}
              </span>
              <span className={s['cityName']}>{arrival.from.city.name}</span>
              <span className={s['stationName']}>
                {arrival.from.railway_station_name}
              </span>
            </div>
            <div className={s['route-container']}>
              <div className={s['route-container-time']}>
                <span className={s['travelTime']}>
                  {travelTime.$d.days}д : &ensp;
                </span>
                <span className={s['travelTime']}>
                  {travelTime.$d.hours}ч : &ensp;
                </span>
                <span className={s['travelTime']}>
                  {travelTime.$d.minutes}м
                </span>
              </div>
              <ArrowL />
            </div>
            <div className={s['route-container-to']}>
              <span className={s['time']}>{getTime(arrival.to.datetime)}</span>
              <span className={s['cityName']}>{arrival.to.city.name}</span>
              <span className={s['stationName']}>
                {arrival.to.railway_station_name}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className={s.footer}>
        <div className={s['seates-info']}>
          {departure.available_seats_info?.fourth ? (
            <div className={s['seates-info-block']}>
              <p className={s['seates-info-name']}>Сидячий</p>
              <span className={s['seates-info-count']}>
                {departure.available_seats_info.fourth}
              </span>
              <p className={s['seates-info-text']}>от</p>
              <span className={s['seates-info-price']}>
                {departure.price_info.fourth?.bottom_price}
              </span>
              <p className={s['seates-info-val']}>&#8381;</p>
            </div>
          ) : (
            ''
          )}
          {departure.available_seats_info?.third ? (
            <div className={s['seates-info-block']}>
              <p className={s['seates-info-name']}>Плацкарт</p>
              <span className={s['seates-info-count']}>
                {departure.available_seats_info.third}
              </span>
              <p className={s['seates-info-text']}>от</p>
              <span className={s['seates-info-price']}>
                {departure.price_info.third?.side_price}
              </span>
              <p className={s['seates-info-val']}>&#8381;</p>
            </div>
          ) : (
            ''
          )}

          {departure.available_seats_info?.second ? (
            <div className={s['seates-info-block']}>
              <p className={s['seates-info-name']}>Купе</p>
              <span className={s['seates-info-count']}>
                {departure.available_seats_info.second}
              </span>
              <p className={s['seates-info-text']}>от</p>
              <span className={s['seates-info-price']}>
                {departure.price_info.second?.top_price}
              </span>
              <p className={s['seates-info-val']}>&#8381;</p>
            </div>
          ) : (
            ''
          )}

          {departure.available_seats_info?.first ? (
            <div className={s['seates-info-block']}>
              <p className={s['seates-info-name']}>Люкс</p>
              <span className={s['seates-info-count']}>
                {departure.available_seats_info.first}
              </span>
              <p className={s['seates-info-text']}>от</p>
              <span className={s['seates-info-price']}>
                {departure.price_info.first?.top_price}
              </span>
              <p className={s['seates-info-val']}>&#8381;</p>
            </div>
          ) : (
            ''
          )}
        </div>
        <Icons className={s['footer-icon']} />
        <br />
        <button onClick={onSelect} className={s['footer-button']}>
          Выбрать места
        </button>
      </div>
    </div>
  );
};
