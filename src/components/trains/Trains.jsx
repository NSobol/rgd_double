import React from 'react';
import { TrainsList } from '../trainsList/TrainsList';
import { useSelector } from 'react-redux';
import { Crumbs } from '../crumbs/Crumbs';
import { DetailsFilter } from '../detailsFilter/DetailsFilter';
import s from './trains.module.css';

export const Trains = () => {
  const { trains } = useSelector((s) => s.trains);
  return (
    <div className={s['trains']}>
      <Crumbs progress={1} />
      <div className={s['trains-content']}>
        <DetailsFilter />
        <TrainsList trains={trains ?? []} />
      </div>
    </div>
  );
};
