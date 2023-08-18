import React from 'react';
import { ReactComponent as Pass } from './../../images/passenger.svg';
import s from './cardPassenger.module.css';

export const CardPassenger = ({ item }) => {
  console.log(item);
	const date = item.birthday;
	const arrDate = date.split('-');
  const personDate = `${arrDate[2]}.${arrDate[1]}.${arrDate[0]}`;


  return (
    <div className={s['block-content-main-passenger']}>
      <div className={s['block-content-main-passenger-header']}>
        <Pass />
        <p>{item.is_adult === 'true' ? 'Взрослый' : 'Детский'}</p>
      </div>
      <div className={s['block-content-main-passenger-body']}>
        <p
          className={s['passenger-body-name']}
        >{`${item.last_name} ${item.first_name} ${item.patronymic}`}</p>
        <p className={s['passenger-body-gender']}>
          Пол {item.gender === 'true' ? 'Мужской' : 'Женский'}
        </p>
        <p className={s['passenger-body-date']}>Дата рождения {personDate}</p>
        <p className={s['passenger-body-document']}>
          {item.is_adult === 'true' ? 'Паспорт РФ' : 'Свидетельство о рождении'}{' '}
          {item.doc_number}
        </p>
      </div>
    </div>
  );
};
