import React, { useState } from 'react';
import s from './reviews.module.css';
import Girl from './../../../images/girl.png';
import Man from './../../../images/man.png';

export const Reviews = () => {
  const [currentSlide] = useState(0);
  const dots = Array(5).fill(0);
  return (
    <section className={s.reviews} id='reviews'>
      <div className={s['reviews-container']}>
        <h2 className={s['reviews-title']}>Отзывы</h2>
        <div className={s['reviews-list']}>
          <div className={s['review-container']}>
            <img src={Girl} alt='Аватар' className={s['review-avatar']} />
            <div className={s['review-content']}>
              <div className={s['review-name']}>Екатерина Вальнова</div>
              <br />
              <div className={s['review-text']}>
                "Доброжелательные подсказки на всех этапах помогут правильно
                заполнить поля и без затруднений купить авиа или ж/д билет, даже
                если вы заказываете онлайн билет впервые."
              </div>
            </div>
          </div>
          <div className={s['review-container']}>
            <img src={Man} alt='Аватар' className={s['review-avatar']} />
            <div className={s['review-content']}>
              <div className={s['review-name']}>Евгений Стрыкало</div> <br />
              <div className={s['review-text']}>
                "СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и
                за 3 часа до отправления мы пришлем вам СМС-напоминание о
                поездке."
              </div>
            </div>
          </div>
          {/* {data.map((item) => (
          <Review review={item} key={item.name} {...item} />
        ))} */}
        </div>
        <ul className={s.dots}>
          {dots.map((item, index) => (
            <li
              className={s[`${currentSlide === index ? 'dot_active' : 'dot'}`]}
              key={index}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};
