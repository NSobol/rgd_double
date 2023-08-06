import React from 'react';
import { Logo } from './../logoFooter/Logo';
import s from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s['footer-container']}>
        <Logo />
        <button
          className={s['footer-link']}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        ></button>
        <p>2018WEB</p>
      </div>
    </footer>
  );
};
