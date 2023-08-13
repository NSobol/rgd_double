import React, { useState } from 'react';
import s from './coachOptionButtons.module.css';
import cn from 'classnames';
import { ReactComponent as Conditioner } from './../../images/Conditioner.svg';
import { ReactComponent as Wifi } from './../../images/Wi-fi.svg';
import { ReactComponent as Nutrition } from './../../images/Nutrition.svg';
import { ReactComponent as Linens } from './../../images/Linens.svg';

export const CoachOptionButtons = ({coachInfo}) => {
  const [selected, setSelected] = useState({
    conditioner: '',
    wifi: '',
    nutrition: '',
    linens: '',
  });

  const handleSelect = (option) => {
    if (selected[option] === 'includes') {
      return;
    } else {
      setSelected((s) => (s = { ...s, [option]: !s[option] }));
    }
  };

  return (
    <div className={s['options']}>
      <Conditioner
        className={cn(
          s['optionButton'],
          { [s['selected']]: selected.conditioner },
          { [s['includes']]: selected.conditioner === 'includes' }
        )}
        onClick={() => handleSelect('conditioner')}
      />
      <Wifi
        className={cn(
          s['optionButton'],
          { [s['selected']]: selected.wifi },
          { [s['includes']]: selected.wifi === 'includes' }
        )}
        onClick={() => handleSelect('wifi')}
      />
      <Nutrition
        className={cn(
          s['optionButton'],
          { [s['selected']]: selected.nutrition },
          { [s['includes']]: selected.nutrition === 'includes' }
        )}
        onClick={() => handleSelect('nutrition')}
      />
      <Linens
        className={cn(
          s['optionButton'],
          { [s['selected']]: selected.linens },
          { [s['includes']]: selected.linens === 'includes' }
        )}
        onClick={() => handleSelect('linens')}
      />
    </div>
  );
};
