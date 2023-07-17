import React from 'react';
import { FormRating } from '../rating/FormRating';
import { Link } from 'react-router-dom';
import MyTiket from './../../images/mainTicket.png';
import Kapitan from './../../images/Kapitan.png';
import Tickets from './../../images/tickets.png';
import s from './successfulOrder.module.css';

export const SuccessfulOrder = () => {
  const orderNumb = '285AA';
  const orderSum = 7760;
  const userName = 'Ирина Эдуардовна';
  return (
    <div className={s.fulOrder}>
      <div className={s['fulOrder-header']}>
        <p>№Заказа {orderNumb}</p>
        <p>
          сумма <span>{orderSum}</span> &#8381;
        </p>
      </div>
      <div className={s['fulOrder-main']}>
        <div className={s['fulOrder-main-group']}>
          <div className={s['fulOrder-main-group-container']}>
            <ul className={s['fulOrder-main-group-list']}>
              <li className={s['fulOrder-main-group-item']}>
                <img src={MyTiket} alt='Билет' />
                <p>
                  билеты будут <br />
                  отправлены <br />
                  на ваш e-mail
                </p>
              </li>
              <li className={s['fulOrder-main-group-item']}>
                <img src={Tickets} alt='Билеты' />
                <p>
                  распечатайте <br />и сохраняйте билеты <br />
                  до даты поездки
                </p>
              </li>
              <li className={s['fulOrder-main-group-item']}>
                <img src={Kapitan} alt='Проводник' />
                <p>
                  предьявите <br />
                  распечатанные 
                  <br />билеты при посадке
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={s['fulOrder-main-content']}>
          <h2>{userName}!</h2>
          <p className={s['fulOrder-main-content-info']}>
            Ваш заказ успешно оформлен.
            <br /> В ближайшее время с вами свяжется наш оператор для
            подтверждения.
          </p>
          <p className={s['fulOrder-main-content-thank']}>
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </p>
        </div>
      </div>
      <div className={s['fulOrder-footer']}>
        <div className={s['fulOrder-footer-estimation']}>
          <p>Оценить сервис</p>
          <FormRating />
        </div>
        <Link to='/' className={s['fulOrder-footer-link']}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};
