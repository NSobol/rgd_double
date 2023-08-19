import React from 'react';
import { TrainsList } from '../../components/trainsList/TrainsList';
import { DetailsFilter } from '../../components/detailsFilter/DetailsFilter';
import { Crumbs } from '../../components/crumbs/Crumbs';
import { useSelector } from 'react-redux';
import s from './listTrainsPage.module.css';
import { NotFound } from '../../components/notfound/NotFound';

export const ListTrainsPage = () => {
  const { trains, total } = useSelector((s) => s.trains);
  
  return (
    <div className={s['trains']}>
      <Crumbs progress={1} />
      <div className={s['trains-content']}>
        <DetailsFilter />
        {trains.length > 0 ? (
          <TrainsList trains={trains} total={total} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};
