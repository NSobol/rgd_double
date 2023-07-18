import React, { useState } from 'react';
import s from './passenger.module.css';

export const Passenger = ({ item, index, toggle }) => {
	const [opened, setOpened] = useState(null);
  const isTitleActive = opened ? 'active' : 'accordionTitle';
  const isActive = opened ? 'content show' : 'content';
  return (
    <div className={s.accordionItem} key={item.title} onClick={toggle}>
      <div className={s[`${isTitleActive}`]}>
        <div className={s.icon}>{opened ? "+" : "-"}</div>
        <h2 className={s.title}>{item.title}</h2>
      </div>
      <div className={s[`${isActive}`]}>{item.content}</div>
    </div>
  );
};
