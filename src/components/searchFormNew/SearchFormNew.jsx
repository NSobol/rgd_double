import React from 'react';
import s from './seachFormNew.module.css';
import Change from './../../images/change.svg';

export const SearchFormNew = () => {
  return (
    <div className={s.formContainer}>
      <form className={s.form}>
        <div className={s['form-fields']}>
          <div className={s['form-group']}>
            <p className={s['form-group-title']}>Направление</p>
            <div className={s['form-group-inputs']}>
              <input
                type='text'
                placeholder='Откуда'
                className={s['form-group-input']}
              />
              <img
                src={Change}
                alt='Поменять местами'
                className={s['form-group-icon']}
              />
              <input
                type='text'
                placeholder='Куда'
                className={s['form-group-input']}
              />
            </div>
          </div>
          <div className={s['form-group']}>
            <p className={s['form-group-title']}>Дата</p>
            <div className={s['form-group-inputs-date']}>
              <input type='date' className={s['form-group-input-date']} />
              <input type='date' className={s['form-group-input-date']} />
            </div>
          </div>
        </div>
        <button className={s['form-button']}>найти билеты</button>
      </form>
    </div>
  );
};
