import React from 'react';
import s from './review.module.css';

export const Review = (review) => {
  return (
    <div className={s['review-container']}>
      <img src={review.avatar} alt='Аватар' className={s['review-avatar']} />
      <div className={s['review-content']}>
        <div className={s['review-name']}>{review.name}</div>
        <div className={s['review-text']}>{review.text}</div>
      </div>
    </div>
  );
};
