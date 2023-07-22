import React from 'react';
import { ReactComponent as Loco } from './../../images/loco.svg';
import s from './train.module.css';
import { useNavigate } from 'react-router-dom';

export const Train = ({ item }) => {
  const data = item.departure;
  console.log(data);

  const navigate = useNavigate();
  const getNavigate = () => {
    navigate('/steptwo');
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Loco />
        <p>{item.departure.train.name}</p>
        <p>
          {data.from.city.name} - {data.to.city.name}
        </p>
      </div>
      <div className={s.main}></div>
      <div className={s.footer}>
        <button onClick={getNavigate}>Выбрать места</button>
      </div>
    </div>
  );
};
