import React, { useState, useId } from 'react';
import { useForm } from 'react-hook-form';
import s from './passengerForm.module.css';
import { HashLink } from 'react-router-hash-link';

export const PassengerForm = ({ test, index, info, isLast }) => {
  const [age, setAge] = useState(info.is_adult);
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });

  const mobility = useId();
  const genderM = useId();
  const genderG = useId();

  const isChecked = checked ? 'passenger-type-checked' : 'passenger-type-check';

  const onSubmit = (data) => {
    const doc_number =
      data.is_adult === 'true'
        ? `${data.doc_number_serias} ${data.doc_number}`
        : data.doc_number;

    const dataInfo = { ...data, doc_number };
    delete dataInfo.doc_number_serias;
    test(dataInfo, index);
  };

  return (
    <div>
      <form onBlur={handleSubmit(onSubmit)}>
        <div>
          <select
            id=''
            className={s.selectAge}
            onChange={(e) => setAge(e.target.value)}
            defaultValue={age}
            {...register('is_adult')}
          >
            <option className={s['selectAge-item']} value={true}>
              Взрослый
            </option>
            <option className={s['selectAge-item']} value={false}>
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
                    name='gender'
                    value='true'
                    defaultChecked
                    id={genderM}
                    {...register('gender')}
                  />
                  <label htmlFor={genderM}>М</label>
                </div>
                <div className={s['form_toggle-item-2']}>
                  <input
                    type='radio'
                    name='gender'
                    value='false'
                    className={s['form_toggle-item-2']}
                    id={genderG}
                    {...register('gender')}
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
                type='date'
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
              {...register('limited_mobility')}
              onChange={() => setChecked(!checked)}
              id={mobility}
            />
            <label className={s['passenger-type-mobility']} htmlFor={mobility}>
              ограниченная подвижность
            </label>
          </div>
        </div>
        {age ? (
          <div className={s['personal-form-group']}>
            <div className={s['personal-form-group-item']}>
              <p className={s['type-docum']}>Тип документа</p>
              <select id='' className={s['select-docum']} defaultValue={age}>
                <option value='Взрослый'>Паспорт РФ</option>
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
                id='doc_number'
                required
                className={s['personal-form-group-item-input']}
                {...register('doc_number_serias')}
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
              <select
                name=''
                id=''
                className={s['selectAge-child']}
                defaultValue={age}
              >
                <option value='Взрослый'>Паспорт РФ</option>
                <option value='Детский'>Свидетельство о рождении</option>
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
          <button className={s['form-footer-button']} disabled={isLast}>
            {isLast ? 'Следующий пассажир' : <HashLink smooth to={`/stepthree#pass${index + 2}`}>
              Следующий пассажир
            </HashLink>}
          </button>
        </div>
      </form>
    </div>
  );
};
