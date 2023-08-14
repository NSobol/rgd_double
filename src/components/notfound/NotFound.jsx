import React from 'react';
import { ReactComponent as SmileSad } from './../../images/sad.svg';
import s from './notfound.module.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className={s.notfound}>
      <div className={s['notfound-container']}>
        <SmileSad className={s.smailSad} />
      </div>
      <div className={s.notText}>
        <p>Упс...Что-то пошло не так...</p>
        <p>По Вашему запросу поезда не найдены </p>
      </div>
      <div className={s['notLink-container']}>
        <p>Пожалуйста вернитесь для изменения запроса</p>
        <Link to='/' className={s.notLink}>
          на главную страницу
        </Link>
      </div>
    </div>
  );
};
