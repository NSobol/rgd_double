import React from 'react';
import { useForm } from 'react-hook-form';
import s from './seachForm.module.css';
import Change from './../../images/change.svg';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api';

export const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  //   [
  //     {
  //       _id: '641037eb5c49ea004632ee6e',
  //       name: 'москва',
  //     },
  //   ];
  // [
  //   {
  //     _id: '641037eb5c49ea004632eee3',
  //     name: 'смоленск',
  //   },
  // ];
  const onSubmit = async (data) => {
    try {
      data['from_city_id'] = '641037eb5c49ea004632eee3';
      data['to_city_id'] = '641037eb5c49ea004632ee6e';
      navigate('/loading');
      console.log(data);
      const res = await api.getAllRoutes(data);
      if (res) {
        navigate('/stepone');
      }
    } catch (error) {
      console.log(error);
    }
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
              name='from_city_name'
              {...register('from_city_name')}
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
              name='to_city_name'
              {...register('to_city_name')}
            />
          </div>
        </div>
        <div className={s['form-group']}>
          <p>Дата</p>
          <div className={s['form-group-inputs-date']}>
            <input type='date' name='date_start' {...register('date_start')} />
            <input type='date' />
          </div>
        </div>
        <button className={s['form-button']}>найти билеты</button>
      </form>
    </div>
  );
};
