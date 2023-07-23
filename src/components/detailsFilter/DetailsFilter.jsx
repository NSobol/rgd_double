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

export const DetailsFilter = () => {
  const [isActive, setIsActive] = useState(false);
  const [opened, setOpened] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <section className={s.details}>
      <div className={s.header}>
        <div className={s['header-block']}>
          <p className={s['header-block-date']}>Дата поездки</p>
          <DateInput />
        </div>
        <div className={s['header-block']}>
          <p className={s['header-block-date']}>Дата возвращения</p>
          <DateInput />
        </div>
      </div>
      <div className={s['filters-block']}>
        <div className={s['filters-block-item']}>
          <Сompartment className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Купе </p>
          <label className={s['filters-block-item-label']}>
            <input type='checkbox' />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Reserved className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Плацкарт </p>
          <label className={s['filters-block-item-label']}>
            <input type='checkbox' />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Sedentary className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Сидячий</p>
          <label className={s['filters-block-item-label']}>
            <input type='checkbox' />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Luks className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Люкс</p>
          <label className={s['filters-block-item-label']}>
            <input type='checkbox' />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Wifi className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Wi-Fi </p>
          <label className={s['filters-block-item-label']}>
            <input type='checkbox' />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
        <div className={s['filters-block-item']}>
          <Express className={s['filters-block-item-icon']} />
          <p className={s['filters-block-item-text']}>Экспресс</p>
          <label className={s['filters-block-item-label']}>
            <input type='checkbox' />
            <span className={s['filters-block-item-span']}></span>
          </label>
        </div>
      </div>

      <div className={s['filters-block']}>
        <p className={s['filters-block-cost']}>Стоимость</p>
        <input type='range' min='0' max='100' step='1' value='0' />
      </div>
      <div className={s['block-container']}>
        <div className={s['block']}>
          <There />
          <p>Туда</p>
        </div>
        <div onClick={() => setIsActive(!isActive)}>
          {isActive ? <Minus /> : <Plus />}
        </div>
        {isActive && (
          <div>
            <div>
              <p className={s['filters-block-cost']}>Стоимость</p>
              <input type='range' min='0' max='100' step='1' value='0' />
            </div>
            <div>
              <p className={s['filters-block-cost']}>Стоимость</p>
              <input type='range' min='0' max='100' step='1' value='0' />
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
          <div onClick={() => setOpened(!opened)}>
            {opened ? <Minus /> : <Plus />}
          </div>
        </div>
        {opened && (
          <div>
            <div>
              <p className={s['filters-block-cost']}>Стоимость</p>
              <input type='range' min='0' max='100' step='1' value='0' />
            </div>
            <div>
              <p className={s['filters-block-cost']}>Стоимость</p>
              <input type='range' min='0' max='100' step='1' value='0' />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
