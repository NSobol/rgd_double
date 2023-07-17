import React from 'react';
import { Logo } from './../logoFooter/Logo';
import { HashLink } from 'react-router-hash-link';
import LinkIcon from './../../../images/button.svg';
import s from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s['footer-container']}>
        <Logo />
        <HashLink to='/#header' className={s['footer-link']}>
          <img src={LinkIcon} alt='Наверх' className={s.icon} />
        </HashLink>
        <p>2018WEB</p>
      </div>
    </footer>
  );
};
