import React, { memo, useCallback, useEffect, useState } from 'react';
import s from './cityInput.module.css';
import { api } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../storage/slices/trainSlice';

export const CityInput = memo(({ placeholder, name }) => {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((s) => s.trains);
  const [cityName, setCityName] = useState(searchParams[`${name}_name`]);
  const [cities, setCities] = useState([]);

  const selectCity = useCallback(
    (city) => {
      setCityName(city.name);
      setCities([]);
      dispatch(setCity({ city, name }));
    },
    [dispatch, name]
  );

  useEffect(() => {
    if (cityName === searchParams[`${name}_name`] || cityName === '') {
      setCities([]);
      return;
    }
    const timer = setTimeout(() => {
      api.searchCities(cityName).then((res) => {
        const requestedCity = res.find((city) => city.name === cityName);
        if (requestedCity) {
          selectCity(requestedCity);
        } else {
          setCities(res);
        }
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [cityName, selectCity, name, searchParams]);

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
});
