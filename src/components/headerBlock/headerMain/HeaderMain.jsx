import React from 'react';
import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import s from './headerMain.module.css';
import { Search } from '../search/Search';

export const HeaderMain = () => {
  return (
    <div className={s['header']} id='header'>
      <Logo />
      <Menu />
      <Search />
    </div>
  );
};
