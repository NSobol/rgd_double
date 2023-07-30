import React from 'react';
import s from './successfulOrderPage.module.css';
import MyTiket from './../../images/mainTicket.png';
import Kapitan from './../../images/Kapitan.png';
import Tickets from './../../images/tickets.png';
import { FormRating } from '../../components/rating/FormRating';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SuccessfulOrderPage = () => {
  const orderInfo = useSelector((s) => s.order);
  const orderNumb = orderInfo.order_number;
  const orderSum = orderInfo.order_sum;
  const userInfo = orderInfo.user;
  const userName = `${userInfo.first_name}  ${userInfo.patronymic}`;

  return (
    <div className={s.content}>
      <div className={s.container}>
        <div className={s.fulOrder}>
          <div className={s.fulOrderNew}>
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
                        <br />
                        билеты при посадке
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
                  Благодарим Вас за оказанное доверие и желаем приятного
                  путешествия!
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
        </div>
      </div>
    </div>
  );
};
