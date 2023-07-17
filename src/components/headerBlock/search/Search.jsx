import React from 'react';
import s from './search.module.css';
import { SearchForm } from '../../searchForm/SearchForm';

export const Search = () => {
  return (
    <section className={s.search}>
      <div className={s['search-container']}>
        <div className={s['search-container-block']}>
          <span className={s['search-container-text']}>Вся жизнь -</span> <br />
          <span className={s['search-container-text1']}>путешествие!</span>
        </div>
        <SearchForm />
      </div>
    </section>
  );
};
