import React, { useState, useId } from 'react';
import { useForm } from 'react-hook-form';
import s from './passengerForm.module.css';

export const PassengerForm = ({ test, info }) => {
  const [age, setAge] = useState('Взрослый');
  const [checked, setChecked] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });

  const mobility = useId();
  const genderM = useId();
  const genderG = useId();

  const isChecked = checked ? 'passenger-type-checked' : 'passenger-type-check';

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(info);

  return (
    <div>
      <form onBlur={handleSubmit(onSubmit)}>
        <div>
          <select
            name=''
            id=''
            className={s.selectAge}
            onChange={(e) => setAge(e.target.value)}
          >
            <option className={s['selectAge-item']} value='Взрослый'>
              Взрослый
            </option>
            <option className={s['selectAge-item']} value='Детский'>
              Детский
            </option>
          </select>
          <div className={s['personal-form-group']}>
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
          </div>
          <div className={s['personal-form-group2']}>
            <div className={s['personal-form-group-item']}>
              <p>Пол</p>
              <div className={s['form_toggle']}>
                <div className={s['form_toggle-item-1']}>
                  <input
                    type='radio'
                    name='radio'
                    value='M'
                    defaultChecked
                    onChange={() => setIsToggle(!isToggle)}
                    id={genderM}
                  />
                  <label htmlFor={genderM}>М</label>
                </div>
                <div className={s['form_toggle-item-2']}>
                  <input
                    type='radio'
                    name='radio'
                    value='Ж'
                    onChange={() => setIsToggle(!isToggle)}
                    className={s['form_toggle-item-2']}
                    id={genderG}
                  />
                  <label htmlFor={genderG}>Ж</label>
                </div>
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
          </div>
          <div className={s['passenger-type']}>
            <input
              className={s[`${isChecked}`]}
              type='checkbox'
              name='limited_mobility'
              value='Ограниченная подвижность'
              {...register('limited_mobility')}
              onChange={() => setChecked(!checked)}
              id={mobility}
            />
            <label className={s['passenger-type-mobility']} htmlFor={mobility}>
              ограниченная подвижность
            </label>
          </div>
        </div>
        {age === 'Взрослый' ? (
          <div className={s['personal-form-group']}>
            <div className={s['personal-form-group-item']}>
              <p className={s['type-docum']}>Тип документа</p>
              <select name='' id='' className={s['select-docum']}>
                <option value='Взрослый' selected>
                  Паспорт РФ
                </option>
                <option value='Детский'>Свидетельство о рождении</option>
              </select>
            </div>
            <div className={s['personal-form-group-item']}>
              <label
                htmlFor='doc_number'
                className={s['personal-form-group-item-label']}
              >
                Серия
              </label>
              <input
                type='text'
                name='doc_number'
                id='doc_number'
                required
                className={s['personal-form-group-item-input']}
                {...register('doc_number')}
              />
            </div>
            <div className={s['personal-form-group-item']}>
              <label
                htmlFor='doc_number'
                className={s['personal-form-group-item-label']}
              >
                Номер
              </label>
              <input
                type='text'
                name='doc_number'
                id='doc_number'
                required
                className={s['personal-form-group-item-input']}
                {...register('doc_number')}
              />
            </div>
          </div>
        ) : (
          <div className={s['personal-form-group-child']}>
            <div className={s['personal-form-group-item']}>
              <p className={s['type-docum']}>Тип документа</p>
              <select name='' id='' className={s['selectAge-child']}>
                <option value='Взрослый'>Паспорт РФ</option>
                <option value='Детский' selected>
                  Свидетельство о рождении
                </option>
              </select>
            </div>
            <div className={s['personal-form-group-item-child']}>
              <label
                htmlFor='doc_number'
                className={s['personal-form-group-item-label']}
              >
                Номер
              </label>
              <input
                type='text'
                name='doc_number'
                id='doc_number'
                placeholder='12 символов'
                required
                className={s['personal-form-group-item-input']}
                {...register('doc_number')}
              />
            </div>
          </div>
        )}
        <div className={s['form-footer']}>
          <button className={s['form-footer-button']}>
            Следующий пассажир
          </button>
        </div>
      </form>
    </div>
  );
};
