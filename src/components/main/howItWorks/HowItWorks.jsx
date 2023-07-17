import React from 'react';
import Monitor from './../../../images/monitor.png';
import Office from './../../../images/Subtract.png';
import Globus from './../../../images/globus.png';
import s from './howItWorks.module.css';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  return (
    <section className={s.howItWorks} id='howItWorks'>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s['header-title']}>Как это работает</h2>
          <Link to='!/' className={s['header-link']}>
            Узнать больше
          </Link>
        </div>
        <ul className={s.advantages}>
          <li className={s.advantage}>
            <img src={Monitor} alt='Монитор' className={s['advantage-image']} />
            <p className={s['advantage-text']}>
              Удобный заказ <br /> на сайте
            </p>
          </li>
          <li className={s.advantage}>
            <img
              src={Office}
              alt='Здание офиса'
              className={s['advantage-image']}
            />
            <p className={s['advantage-text']}>
              Нет необходимости ехать в офис
            </p>
          </li>
          <li className={s.advantage}>
            <img src={Globus} alt='Глобус' className={s['advantage-image']} />
            <p className={s['advantage-text']}>Огромный выбор направлений</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
