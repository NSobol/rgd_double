import React from 'react';
import { HashLink } from 'react-router-hash-link';
import s from './menu.module.css';

export const Menu = () => {
    return (
      <div className={s['menu-container']}>
        <nav className={s['menu']}>
          <ul className={s['menu-list']}>
            <li className={s['menu-list-item']}>
              <HashLink to='/#aboutUs' className={s['menu-list-item-link']}>
                О нас
              </HashLink>
            </li>
            <li className={s['menu-list-item']}>
              <HashLink to='/#howItWorks' className={s['menu-list-item-link']}>
                Как это работает
              </HashLink>
            </li>
            <li className={s['menu-list-item']}>
              <HashLink to='/#reviews' className={s['menu-list-item-link']}>
                Отзывы
              </HashLink>
            </li>
            <li className={s['menu-list-item']}>
              <HashLink to='/#contacts' className={s['menu-list-item-link']}>
                Контакты
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    );
}
