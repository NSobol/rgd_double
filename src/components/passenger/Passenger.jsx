import React, { useState } from 'react';
import { ReactComponent as Clouse } from './../../images/clouse.svg';
import { ReactComponent as Plus } from './../../images/plusCircle.svg';
import { ReactComponent as Minus } from './../../images/minusCircle.svg';
import s from './passenger.module.css';
import { useForm } from 'react-hook-form';

export const Passenger = ({ index }) => {
  const [opened, setOpened] = useState(false);
  const isTitleActive = opened ? 'active' : 'accordionTitle';
  const isActive = opened ? 'content show' : 'content';
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={s.accordionItem}>
      <div className={s[`${isTitleActive}`]} onClick={() => setOpened(!opened)}>
        <div className={s.container}>
          <div className={s.icon}>{opened ? <Minus /> : <Plus />}</div>
          <h2 className={s.title}>Пассажир №{index + 1}</h2>
        </div>
        {opened && <Clouse onClick={() => setOpened(!opened)} />}
      </div>
      <div className={s[`${isActive}`]}>
        <form id='formPassenger' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <select name='' id='' className={ s.selectAge}>
              <option value='Взрослый'>Взрослый</option>
              <option value='Детский'>Детский</option>
            </select>
            <div className={s['personal-form-group-item']}>
              <label
                htmlFor='surname'
                className={s['personal-form-group-item-label']}
              >
                Фамилия
              </label>
              <input
                type='text'
                name='surname'
                id='surname'
                required
                className={s['personal-form-group-item-input']}
                {...register('surname')}
              />
            </div>
            <div className={s['personal-form-group-item']}>
              <label
                htmlFor='name'
                className={s['personal-form-group-item-label']}
              >
                Имя
              </label>
              <input
                type='text'
                name='name'
                id='name'
                required
                className={s['personal-form-group-item-input']}
                {...register('name')}
              />
            </div>
            <div className={s['personal-form-group-item']}>
              <label
                htmlFor='middleName'
                className={s['personal-form-group-item-label']}
              >
                Отчество
              </label>
              <input
                type='text'
                name='middleName'
                id='middleName'
                required
                className={s['personal-form-group-item-input']}
                {...register('middleName')}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
