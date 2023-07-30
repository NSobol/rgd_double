import React from 'react';
import s from './seachForm.module.css';
import Change from './../../images/change.svg';
import { useNavigate } from 'react-router-dom';
import { CityInput } from '../cityInput/cityInput';
import DateInput from '../dateInput/dateInput';
import { useDispatch } from 'react-redux';
import { getTrains } from '../../storage/slices/trainSlice';

export const SearchForm = ({ type = 'search' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getTrains()).then((res) => {
      if (res.type.endsWith('fulfilled')) navigate('/stepone');
    });
  };

  return (
    <div
      className={
        s[`${type === 'search' ? 'formContainer' : 'formContainerNew'}`]
      }
    >
      <form
        className={s[`${type === 'search' ? 'form' : 'formNew'}`]}
        onSubmit={handleSubmit}
      >
        <div
          className={s[`${type === 'search' ? 'container' : 'containerNew'}`]}
        >
          <div
            className={
              s[`${type === 'search' ? 'form-group' : 'form-groupNew'}`]
            }
          >
            <p className={s['form-group-title']}>Направление</p>
            <div className={s['form-group-inputs']}>
              <CityInput placeholder={'Откуда'} name={'from_city'} />
              <img
                src={Change}
                alt='Поменять местами'
                className={s['form-group-icon']}
              />
              <CityInput placeholder={'Куда'} name={'to_city'} />
            </div>
          </div>
          <div
            className={
              s[`${type === 'search' ? 'form-group' : 'form-groupNew'}`]
            }
          >
            <p className={s['form-group-title']}>Дата</p>
            <div
              className={
                s[
                  `${
                    type === 'search'
                      ? 'form-group-inputs-date'
                      : 'form-group-inputs-dateNew'
                  }`
                ]
              }
            >
              <div className={s['form-group-inputs-date-container']}>
                <DateInput name={'date_start'} />
              </div>
              <div className={s['form-group-inputs-date-container']}>
                <DateInput name={'date_end'} />
              </div>
            </div>
          </div>
        </div>
        <button className={s['form-button']} type='submit'>
          найти билеты
        </button>
      </form>
    </div>
  );
};
