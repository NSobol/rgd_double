import React, { useEffect, useState } from 'react';
import s from './cityInput.module.css';
import { api } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { setCity } from '../../storage/slices/trainSlice';

export const CityInput = ({ placeholder, name }) => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [cities, setCities] = useState([]);

  const selectCity = (city) => {
    setCityName(city.name);
    setCities([]);
    dispatch(setCity({city, name}))
  };

  useEffect(() => {
    if (cityName === '') {
      setCities([]);
      return;
    }
    const timer = setTimeout(() => {
      api.searchCities(cityName).then((res) => {
        const requestedCity = res.find((city) => city.name === cityName)
        if (requestedCity) {
          selectCity(requestedCity);
        } else {
          setCities(res);
        }
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [cityName]);

  return (
    <div className={s['cityInput-container']}>
      <input
        className={s['cityInput-input']}
        name={name}
        autoComplete='off'
        type='text'
        required
        value={cityName}
        onInput={(e) => setCityName(e.target.value)}
        placeholder={placeholder}
      />
      {!!cities.length && (
        <div className={s['cityInput-cityList']}>
          {cities.map((city) => (
            <span
              className={s['cityInput-cityList-option']}
              key={city._id}
              onClick={() => selectCity(city)}
            >
              {city.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
