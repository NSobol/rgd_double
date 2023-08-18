import React, { useState } from 'react';
import { ReactComponent as There } from './../../images/There.svg';
import { ReactComponent as Back } from './../../images/Back.svg';
import { ReactComponent as Plus } from './../../images/plus.svg';
import { ReactComponent as Minus } from './../../images/minus.svg';
import { ReactComponent as User } from './../../images/user.svg';
import { ReactComponent as ArrowR } from '../../images/ArrowR.svg';
import {  useSelector } from 'react-redux';
import s from './detailsTrip.module.css';
import dayjs from 'dayjs';
// import { setOrderPrice } from '../../storage/slices/orderSlice';
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export const DetailsTrip = () => {
  // const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [opened, setOpened] = useState(false);
  const [show, setShow] = useState(false);
  const activShow = isActive ? 'content show' : 'content';
  // const isOpened = opened ? 'content show' : 'content';
  const passActivShow = show ? 'content show' : 'content';

  const details = useSelector((s) => s.trains.currentRoute);
  const detailsPass = useSelector((s) => s.order);
  console.log(detailsPass);

  const getDateStr = (datetime) => {
    const year = datetime.getFullYear();
    const day = datetime.getDate();
    const month =
      datetime.getMonth() < 10
        ? '0' + datetime.getMonth()
        : datetime.getMonth();
    return '' + day + '.' + month + '.' + year;
  };

  const getTime = (dateInMS) => {
    const date = new Date(dateInMS * 1000);
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return date.getHours() + ':' + minutes;
  };

  const travelTime = dayjs.duration(details.departure.duration * 1000);
  const from = details.departure.from.city.name;
  const to = details.departure.to.city.name;

  //Пассажиры и цены
  let adult = 0;
  let child = 0;
  let priceAdult = 0;
  let priceChild = 0;
  for (let i = 0; i < detailsPass.departure.seats.length; i++) {
    let status = detailsPass.departure.seats[i].is_child;

    if (status === false) {
      adult += 1;
      priceAdult += adult * detailsPass.departure.seats[i].price;
    } else {
      child += 1;
      priceChild += (detailsPass.departure.seats[i].price / 2);
      console.log(priceChild);
    }
  }

  let isChildEnd = '';
  if (child === 1) {
    isChildEnd = 'Ребенок';
  } else if (child > 1 && child < 5) {
    isChildEnd = 'Ребенка';
  } else {
    isChildEnd = 'Детей';
  }

  const order_price = `${priceAdult + priceChild}`;


  return (
    <section className={s.details}>
      <div className='header'>
        <h3 className={s['details-title']}>Детали поездки</h3>
      </div>
      <div className={s['block-container']}>
        <div className={s['block-container-header']}>
          <div className={s['block']}>
            <There />
            <span className={s['block-there']}>Туда</span>
            <span className={s['block-there-date']}>
              {getDateStr(new Date(details.departure.from.datetime * 1000))}
            </span>
          </div>
          <div onClick={() => setIsActive(!isActive)}>
            {isActive ? <Minus /> : <Plus />}
          </div>
        </div>
        <div className={s[`${activShow}`]}>
          <div className={s.trainInfo}>
            <p className={s['trainInfo-text']}>№ поезда</p>
            <p className={s['trainInfo-number']}>
              {details.departure.train._id.slice(-4)}
            </p>
          </div>
          <div className={s.trainInfo}>
            <p className={s['trainInfo-text']}>Название</p>
            <p className={s['trainInfo-number']}>
              {from}
              <br /> {to}
            </p>
          </div>
          <div className={s.trainInfo}>
            <p className={s['trainInfo-text']}>
              {getTime(details.departure.from.datetime)}
            </p>
            <div className={s['route-container']}>
              <div className={s['route-container-time']}>
                <span className={s['travelTime']}>
                  {travelTime.$d.hours} :&ensp;
                </span>
                <span className={s['travelTime']}>{travelTime.$d.minutes}</span>
              </div>
              <ArrowR />
            </div>
            <p className={s['trainInfo-number']}>
              {' '}
              {getTime(details.departure.to.datetime)}{' '}
            </p>
          </div>

          <div className={s.trainInfo}>
            <p className={s['trainInfo-text']}>
              {getDateStr(new Date(details.departure.from.datetime * 1000))}
            </p>
            <p className={s['trainInfo-number']}>
              {' '}
              {getDateStr(new Date(details.departure.to.datetime * 1000))}{' '}
            </p>
          </div>
          <div className={s.trainInfo}>
            <p className={s['trainInfo-text']}>{from}</p>
            <p className={s['trainInfo-number']}> {to}</p>
          </div>
          <div className={s.trainInfo}>
            <p className={s['trainInfo-text']}>
              {details.departure.from.railway_station_name}
              <br /> вокзал
            </p>
            <p className={s['trainInfo-number']}>
              {' '}
              {details.departure.to.railway_station_name} <br /> вокзал
            </p>
          </div>
        </div>
      </div>
      {details.arrival && (
        <div className={s['block-container']}>
          <div className={s['block-container-header']}>
            <div className={s['block']}>
              <Back />
              <p className={s['block-there']}>Обратно</p>
              <span className={s['block-there-date']}>
                {details.arrival &&
                  getDateStr(new Date(details?.arrival.from.datetime * 1000))}
              </span>
            </div>
            <div onClick={() => setOpened(!opened)}>
              {opened ? <Minus /> : <Plus />}
            </div>
          </div>
        </div>
      )}
      {detailsPass.departure.seats.length > 0 && (
        <div className={s['block-container']}>
          <div className={s['block-container-header']}>
            <div className={s['block']}>
              <User />
              <p className={s['block-there']}>Пассажиры</p>
            </div>
            <div onClick={() => setShow(!show)}>
              {show ? <Minus /> : <Plus />}
            </div>
          </div>
          <div className={s[`${passActivShow}`]}>
            <div className={s.passengers}>
              <p className={s['passengers-count']}>
                {adult} {adult > 1 ? 'Взрослых' : 'Взрослый'}
              </p>
              <p className={s['passengers-price']}>{priceAdult} &#8381;</p>
            </div>
            <div className={s.passengers}>
              <p className={s['passengers-count']}>
                {child} {isChildEnd}
              </p>
              <p className={s['passengers-price']}>{priceChild} &#8381;</p>
            </div>
          </div>
        </div>
      )}
      <div className={s.footer}>
        <p>Итог</p>
        <p>
          <span>{order_price} </span>&#8381;
        </p>
      </div>
    </section>
  );
};
