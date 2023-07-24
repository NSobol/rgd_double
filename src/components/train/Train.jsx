import React from 'react';
import { ReactComponent as Loco } from './../../images/loco.svg';
import s from './train.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectRoute } from '../../storage/slices/trainSlice';

export const Train = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = item.departure;

  const onSelect = () => {
    dispatch(selectRoute(item));
    navigate('/steptwo');
  }

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
        <button onClick={onSelect}>Выбрать места</button>
      </div>
    </div>
  );
};
