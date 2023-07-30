import React from 'react';
import s from './person.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './../../storage/slices/orderSlice';

export const PersonDataForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setUser(data));
    navigate('/confirm');
  };

  return (
    <section className={s.person}>
      <div className={s['person-container']}>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
          <div className={s.personal}>
            <div className={s['personal-title-container']}>
              <h2 className={s['personal-title']}>Персональные данные</h2>
            </div>
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
            <div className={s['personal-form-group']}>
              <div className={s['personal-form-group-item']}>
                <label
                  htmlFor='tel'
                  className={s['personal-form-group-item-label']}
                >
                  Контактный телефон
                </label>
                <input
                  type='tel'
                  name='phone'
                  id='tel'
                  required
                  placeholder='+7 ___ ___ __ __'
                  className={s['personal-form-group-item-input']}
                  {...register('phone')}
                />
              </div>
            </div>
            <div className={s['personal-form-group']}>
              <div className={s['personal-form-group-item']}>
                <label
                  htmlFor='email'
                  className={s['personal-form-group-item-label']}
                >
                  E-mail
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='inbox@gmail.ru'
                  className={s['personal-form-group-item-input']}
                  {...register('email')}
                />
              </div>
            </div>
          </div>
          <div className={s['person-payment']}>
            <div className={s['personal-title-container']}>
              <h2 className={s['personal-title']}>Способ оплаты</h2>
            </div>
            <div>
              <div className={s['person-payment-type']}>
                <input
                  className={s['person-payment-type-check']}
                  type='radio'
                  name='payment_method'
                  id='online'
                  value='Онлайн'
                  {...register('payment_method')}
                />
                <label
                  htmlFor='online'
                  className={s['person-payment-type-online']}
                >
                  Онлайн
                </label>
                <div className={s['payment-type-online']}>
                  <ul className={s['payment-type-online-list']}>
                    <li className={s['payment-type-online-item']}>
                      Банковской <br />
                      картой
                    </li>
                    <li className={s['payment-type-online-item']}>PayPal</li>
                    <li className={s['payment-type-online-item']}>
                      Visa QIWI Wallet
                    </li>
                  </ul>
                </div>
              </div>
              <div className={s['person-payment-type']}>
                <input
                  className={s['person-payment-type-check']}
                  type='radio'
                  name='payment_method'
                  id='cash'
                  value='Наличными'
                  {...register('payment_method')}
                />
                <label htmlFor='cash' className={s['person-payment-type-cash']}>
                  Наличными
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button type='submit' form='form' className={s['person-payment-button']}>
        КУПИТЬ БИЛЕТЫ
      </button>
    </section>
  );
};
