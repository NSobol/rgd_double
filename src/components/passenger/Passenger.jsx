import React, { useState } from 'react';
import { ReactComponent as Clouse } from './../../images/clouse.svg';
import { ReactComponent as Plus } from './../../images/plusCircle.svg';
import { ReactComponent as Minus } from './../../images/minusCircle.svg';
import s from './passenger.module.css';
import { useForm } from 'react-hook-form';

export const Passenger = ({ index }) => {
  const [opened, setOpened] = useState(false);
  const [checked, setChecked] = useState(false);
  const isTitleActive = opened ? 'active' : 'accordionTitle';
  const isActive = opened ? 'content show' : 'content';
  const isChecked = checked ? 'passenger-type-checked' : 'passenger-type-check';

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
        <div id='formPassenger' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <select name='' id='' className={s.selectAge}>
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
                name='last_name'
                id='surname'
                required
                className={s['personal-form-group-item-input']}
                {...register('last_name')}
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
                name='first_name'
                id='name'
                required
                className={s['personal-form-group-item-input']}
                {...register('first_name')}
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
                name='patronymic'
                id='middleName'
                required
                className={s['personal-form-group-item-input']}
                {...register('patronymic')}
              />
            </div>

            <div class={s['form_toggle']}>
              <div class={s['form_toggle-item-1']}>
                <input
                  id='fid-1'
                  type='radio'
                  name='radio'
                  value='off'
                  checked
                />
                <label for='fid-1'>М</label>
              </div>
              <div class={s['form_toggle-item-2']}>
                <input id='fid-2' type='radio' name='radio' value='on' />
                <label for='fid-2'>Ж</label>
              </div>
            </div>

            <div className={s['personal-form-group-item']}>
              <label
                htmlFor='dateBirthday'
                className={s['personal-form-group-item-label']}
              >
                Дата рождения
              </label>
              <input
                type='text'
                name='birthday'
                id='dateBirthday'
                required
                className={s['personal-form-group-item-input']}
                placeholder='ДД/ММ/ГГ'
                {...register('birthday')}
              />
            </div>

            <div className={s['passenger-type']} onChange={() => setChecked(!checked)}>
              <input
                className={s[`${isChecked}`]}
                type='checkbox'
                name='limited_mobility'
                id='limited_mobility'
                value='Ограниченная подвижность'
                // {...register('limited_mobility')}
                checked={checked}
              />
              <label
                htmlFor='limited_mobility'
                className={s['passenger-type-mobility']}
              >
                ограниченная подвижность
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
