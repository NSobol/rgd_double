import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getTrains, setFilter } from '../../storage/slices/trainSlice';

function valuetext(value) {
  return `${value}`;
}

export const RangeInput = ({ min, max, filterMin, filterMax }) => {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((s) => s.trains);
  const [value, setValue] = useState([searchParams[filterMin], searchParams[filterMax]]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setFilter({ filter: filterMin, value: value[0] }));
      dispatch(setFilter({ filter: filterMax, value: value[1] }));
      dispatch(getTrains());
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, value, filterMin, filterMax]);

  return (
    <Box sx={{ width: 294 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        min={min}
        max={max}
        sx={{
          '& .MuiSlider-markLabel': {
            boxShadow: 'none',
            top: '33px',
            color: '#E5E5E5',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            position: 'relative',
            marginTop: '5px',
          },
          '& .MuiSlider-markLabelActive ': {
            boxShadow: 'none',
            color: '#E5E5E5',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            position: 'relative',
            marginTop: '5px',
          },

          '& .MuiSlider-thumb': {
            color: '#fff',
            boxShadow: 'none',
            height: '24px',
            width: '24px',
          },
          '& .MuiSlider-thumb:hover': {
            boxShadow: 'none',
          },
          '& .MuiSlider-track': {
            color: '#FFA800',
            background: '#FFA800',
            height: '19px',
            boxShadow: 'none',
          },
          '& .MuiSlider-rail': {
            background: '#3E3C41',
            height: '19px',
            width: '294px',
            border: '1px solid #fff',
            boxShadow: 'none',
          },
          '& .MuiSlider-active': {
            color: 'fff',
            boxShadow: 'none',
          },
          '& .MuiSlider-valueLabel': {
            color: 'fff',
          },
        }}
      />
    </Box>
  );
};
