import React from 'react';
import { useForm } from 'react-hook-form';
import s from './seachForm.module.css';
import Change from './../../images/change.svg';
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/loading');
  };

  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s['form-group']}>
          <p>Направление</p>
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
          <p>Дата</p>
          <div className={s['form-group-inputs-date']}>
            <input type='date' /> <input type='date' />
          </div>
        </div>
        <button className={s['form-button']}>найти билеты</button>
      </form>
    </div>
  );
};
