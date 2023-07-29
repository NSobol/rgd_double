import React, { useEffect } from 'react';
import { Logo } from './../logo/Logo';
import { Menu } from './../menu/Menu';
import s from './header.module.css';
import { useLocation } from 'react-router-dom';
import { SearchForm } from '../../searchForm/SearchForm';

export const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.replace('').split('/')[1];

  let activeClass = '';
  let activeLocation = '';
  let type = 'search';

  switch (splitLocation) {
    case '':
      activeClass = 'headerMain';
      activeLocation = 'main';
      break;
    case 'fulorder':
      activeClass = 'headerFinal';
      activeLocation = 'order';
      break;
    default:
      activeClass = 'header';
      activeLocation = 'progress';
      type = 'searchNew';
      break;
  }

  useEffect(() => {}, [location]);

  return (
    <div className={s[activeClass]} id='header'>
      <Logo />
      <Menu />
      {activeLocation === 'main' && (
        <section className={s.search}>
          <div className={s['search-container']}>
            <div className={s['search-container-block']}>
              <span className={s['search-container-text']}>Вся жизнь -</span>{' '}
              <br />
              <span className={s['search-container-text1']}>путешествие!</span>
            </div>
            <SearchForm type={type} />
          </div>
        </section>
      )}
      {activeLocation === 'order' && (
        <div className={s['headerFinal-title-container']}>
          <h1 className={s['headerFinal-title']}>Благодарим Вас за заказ!</h1>
        </div>
      )}
      {activeLocation === 'progress' && <SearchForm type={type} />}
    </div>
  );
};
