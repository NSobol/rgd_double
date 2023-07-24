import React from 'react';
import s from './dateInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../storage/slices/trainSlice';

const DateInput = ({ name, getTrains = false }) => {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((s) => s.trains);
  const today = new Date().toLocaleDateString('en-ca');

  const selectDate = (e) => {
    dispatch(setDate({ name, value: e.target.value }));
    getTrains && dispatch(getTrains());
  };

  return (
    <input
      className={s['dateInput']}
      min={today}
      onChange={selectDate}
      type='date'
      defaultValue={searchParams[name]}
      name={name}
    />
  );
};

export default DateInput;
