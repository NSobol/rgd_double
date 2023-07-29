import React from 'react';
import s from './aboutUs.module.css';

export const AboutUs = () => {
  return (
    <section className={s.aboutUs} id='aboutUs'>
      <div className={s['aboutUs-container']}>
        <h2 className={s.title}>О нас</h2>
        <div className={s.content}>
          <div className={s.container}>
            <p className={s['content-paragraph']}>
              Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
              наблюдаем, как с каждым днем все больше людей заказывают жд билеты
              через интернет.
              <br />
              <br />
              Сегодня можно заказать железнодорожные билеты онлайн всего в 2
              клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
              через интернет.
              <br />
              <br />
              <strong>
                Покупать жд билеты дешево можно за 90 суток до отправления
                поезда. Благодаря динамическому ценообразованию цена на билеты в
                это время самая низкая.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


