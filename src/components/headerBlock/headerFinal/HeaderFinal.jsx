import React from 'react';
import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import s from './headerFinal.module.css';

export const HeaderFinal = () => {
  return (
    <div className={s['header']} id='header'>
      <Logo />
      <Menu />
      <div className={s['header-title-container']}>
        <h1 className={s['header-title']}>Благодарим Вас за заказ!</h1>
      </div>
    </div>
  );
};
