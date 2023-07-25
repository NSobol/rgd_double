import React, { useState } from 'react';
import { ReactComponent as There } from './../../images/There.svg';
import { ReactComponent as Back } from './../../images/Back.svg';
import { ReactComponent as Plus } from './../../images/plus.svg';
import { ReactComponent as Minus } from './../../images/minus.svg';
import { ReactComponent as Luks } from './../../images/Luks.svg';
import { ReactComponent as Express } from './../../images/Express.svg';
import { ReactComponent as Wifi } from './../../images/wifi.svg';
import { ReactComponent as Сompartment } from './../../images/Compartment.svg';
import { ReactComponent as Reserved } from './../../images/Reserved.svg';
import { ReactComponent as Sedentary } from './../../images/sedentary.svg';
import s from './detailsFilter.module.css';
import DateInput from '../dateInput/dateInput';
import { RangeInput } from '../rangeInput/RangeInput';
import { useDispatch, useSelector } from 'react-redux';
import { getTrains, setFilter } from '../../storage/slices/trainSlice';

export const DetailsFilter = () => {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((s) => s.trains);
  const [isActive, setIsActive] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleFilter = (filter, e) => {
    dispatch(setFilter({ filter, value: e.target.checked }));
    dispatch(getTrains());
  };

  return (
    <div className={s.details}>
      <div className={s.header}>
        <div className={s['header-block']}>
          <p className={s['header-block-date']}>Дата поездки</p>
          <DateInput name={'date_start'} getTrains={getTrains} />
        </div>
        <div className={s['header-block']}>
          <p className={s['header-block-date']}>Дата возвращения</p>
          <DateInput name={'date_end'} getTrains={getTrains} />
        </div>
      </div>
      <div className={s['filters-block']}>
        <div className={s['filters-block-item']}>
          <Сompartment className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Купе </p>
          <label className={s['filters-block-item-label']}>
            <input
              type='checkbox'
              onChange={(e) => handleFilter('have_second_class', e)}
              checked={searchParams['have_second_class']}
            />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Reserved className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Плацкарт </p>
          <label className={s['filters-block-item-label']}>
            <input
              type='checkbox'
              onChange={(e) => handleFilter('have_third_class', e)}
              checked={searchParams['have_third_class']}
            />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Sedentary className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Сидячий</p>
          <label className={s['filters-block-item-label']}>
            <input
              type='checkbox'
              onChange={(e) => handleFilter('have_fourth_class', e)}
              checked={searchParams['have_fourth_class']}
            />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Luks className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Люкс</p>
          <label className={s['filters-block-item-label']}>
            <input
              type='checkbox'
              onChange={(e) => handleFilter('have_first_class', e)}
              checked={searchParams['have_first_class']}
            />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Wifi className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Wi-Fi </p>
          <label className={s['filters-block-item-label']}>
            <input
              type='checkbox'
              onChange={(e) => handleFilter('have_wifi', e)}
              checked={searchParams['have_wifi']}
            />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Express className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Экспресс</p>
          <label className={s['filters-block-item-label']}>
            <input
              type='checkbox'
              onChange={(e) => handleFilter('have_express', e)}
              checked={searchParams['have_express']}
            />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
      </div>

      <div className={s['filter-block-cost']}>
        <p className={s['filter-block-cost-title']}>Стоимость</p>
        <RangeInput min={300} max={7000} filterMin={'price_from'} filterMax={'price_to'} />
        <div className={s['filter-block-cost-text']}>
          <p>300</p>
          <p>7000</p>
        </div>
      </div>
      <div className={s['blocks-container']}>
        <div className={s['block-container-header']}>
          <div className={s['block']}>
            <There />
            <p>Туда</p>
          </div>
          <div onClick={() => setIsActive(!isActive)}>{isActive ? <Minus /> : <Plus />}</div>
        </div>
        {isActive && (
          <div className={s['filter-time-container']}>
            <div>
              <p className={s['filters-block-time-out']}>Время отбытия</p>
              <RangeInput
                min={0}
                max={24}
                filterMin={'start_departure_hour_from'}
                filterMax={'start_departure_hour_to'}
              />
              <div className={s['filter-block-cost-text']}>
                <p>0:00</p>
                <p>24:00</p>
              </div>
            </div>
            <div>
              <p className={s['filters-block-time']}>Время прибытия</p>
              <RangeInput
                min={0}
                max={24}
                filterMin={'start_arrival_hour_from'}
                filterMax={'start_arrival_hour_to'}
              />
              <div className={s['filter-block-cost-text']}>
                <p>0:00</p>
                <p>24:00</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={s['blocks-container']}>
        <div className={s['block-container']}>
          <div className={s['block']}>
            <Back />
            <p>Обратно</p>
          </div>
          <div onClick={() => setOpened(!opened)}>{opened ? <Minus /> : <Plus />}</div>
        </div>
        {opened && (
          <div className={s['filter-time-container']}>
            <div>
              <p className={s['filters-block-time-out']}>Время отбытия</p>
              <RangeInput
                min={0}
                max={24}
                filterMin={'end_departure_hour_from'}
                filterMax={'end_departure_hour_to'}
              />
              <div className={s['filter-block-cost-text']}>
                <p>0:00</p>
                <p>24:00</p>
              </div>
            </div>
            <div>
              <p className={s['filters-block-time']}>Время прибытия</p>
              <RangeInput
                min={0}
                max={24}
                filterMin={'end_arrival_hour_from'}
                filterMax={'end_arrival_hour_to'}
              />
              <div className={s['filter-block-cost-text']}>
                <p>0:00</p>
                <p>24:00</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
