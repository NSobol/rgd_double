import React from 'react';
import s from './dateInput.module.css';
import { useDispatch } from 'react-redux';
import { setDate } from '../../storage/slices/trainSlice';

const DateInput = ({name}) => {
  const dispatch = useDispatch();
  const today = new Date().toLocaleDateString('en-ca')

  const selectDate = (e) => {
    dispatch(setDate({value: e.target.value, name}))
  }

  return (
    <input className={s['dateInput']} min={today} onChange={selectDate} type='date' name={name}  />
  );
}

export default DateInput;