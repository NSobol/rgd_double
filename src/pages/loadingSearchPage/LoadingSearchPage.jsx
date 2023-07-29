import React from 'react';
import AnimateDownload from './../../images/animation-downloads.gif';
import s from './loading.module.css';

export const LoadingSearchPage = () => {
  return (
    <section className={s.loading}>
      <div className={s['loading-container']}>
        <p className={s['loading-container-text']}>идет поиск</p>
        <img
          src={AnimateDownload}
          alt='Идет поиск'
          className={s['loading-container-gif']}
        />
      </div>
    </section>
  );
};
