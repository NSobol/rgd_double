import React, { useState } from 'react';
import { ReactComponent as There } from './../../images/There.svg';
import { ReactComponent as Back } from './../../images/Back.svg';
import { ReactComponent as Plus } from './../../images/plus.svg';
import { ReactComponent as Minus } from './../../images/minus.svg';
import { ReactComponent as User } from './../../images/user.svg';
import s from './detailsTrip.module.css';
import { useSelector } from 'react-redux';

export const DetailsTrip = () => {
  const [isActive, setIsActive] = useState(false);
  const [opened, setOpened] = useState(false);
  const [show, setShow] = useState(false);
  const activShow = isActive ? 'content show' : 'content';
  const sum = 7760;

  const details = useSelector((s) => s.trains.currentRoute);
  console.log(details);

  const getDateStr = (datetime) => {
    const year = datetime.getFullYear();
    const day = datetime.getDate();
    const month =
      datetime.getMonth() < 10
        ? '0' + datetime.getMonth()
        : datetime.getMonth();
    return '' + day + '.' + month + '.' + year;
  };

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
          <div>
            <span>№ поезда</span>
          </div>
        </div>
      </div>

      <div className={s['block-container']}>
        <div className={s['block']}>
          <Back />
          <p className={s['block-there']}>Обратно</p>
        </div>
        <div onClick={() => setOpened(!opened)}>
          {opened ? <Minus /> : <Plus />}
        </div>
      </div>
      <div className={s['block-container']}>
        <div className={s['block']}>
          <User />
          <p className={s['block-there']}>Пассажиры</p>
        </div>
        <div onClick={() => setShow(!show)}>{show ? <Minus /> : <Plus />}</div>
      </div>
      <div className={s.footer}>
        <p>Итог</p>
        <p>
          <span>{sum} </span>&#8381;
        </p>
      </div>
    </section>
  );
};
