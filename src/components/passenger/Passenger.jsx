import React, { useState } from 'react';
import s from './passenger.module.css';

export const Passenger = ({ index }) => {
  const [opened, setOpened] = useState(false);
  const isTitleActive = opened ? 'active' : 'accordionTitle';
  const isActive = opened ? 'content show' : 'content';

  return (
    <div className={s.accordionItem}>
      <div className={s[`${isTitleActive}`]} onClick={() => setOpened(!opened)}>
        <div className={s.icon}>{opened ? '-' : '+'}</div>
        <h2 className={s.title}>Пассажир №{index + 1}</h2>
      </div>
      <div className={s[`${isActive}`]}>
        <form>
          <div>
            <select name='' id=''>
              <option value='Взрослый'>Взрослый</option>
              <option value='Детский'>Детский</option>
            </select>
          </div>
          
        </form>
      </div>
    </div>
  );
};
