import React from 'react';
import { DetailsTrip } from '../detailsTrip/DetailsTrip';
import { TrainsList } from '../trainsList/TrainsList';
import s from './trains.module.css';
import { useSelector } from 'react-redux';
import { Crumbs } from '../crumbs/Crumbs';

export const Trains = () => {
  const { trains } = useSelector((s) => s.trains);
  return (
    <div className={s['trains']}>
      <Crumbs progress={1} />
      <div className={s['trains-content']}>
        <DetailsTrip />
        <TrainsList trains={trains ?? []} />
      </div>
    </div>
  );
};
