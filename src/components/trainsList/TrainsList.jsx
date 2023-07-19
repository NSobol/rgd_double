import React from 'react'
import { Train } from '../train/Train';

export const TrainsList = ({ trains = [] }) => {
  console.log(trains);
  return (
    <div>
      {trains.map((item, i) => (
        <Train key={i} item={item} />
      ))}
    </div>
  );
}
