import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export const RangeInput = ({ mark, min, max }) => {
  const [value, setValue] = useState([0,1]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            'font-family': 'Roboto',
            'font-size': '16px',
            'font-style': 'normal',
            'font-weight': 400,
            'line-height': 'normal',
            position: 'relative',
            'margin-top': '5px',
          },
          '& .MuiSlider-markLabelActive ': {
            boxShadow: 'none',
            color: '#E5E5E5',
            'font-family': 'Roboto',
            'font-size': '16px',
            'font-style': 'normal',
            'font-weight': 400,
            'line-height': 'normal',
            position: 'relative',
            'margin-top': '5px',
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
