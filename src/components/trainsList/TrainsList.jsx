import React from 'react'
import { Train } from '../train/Train';

export const TrainsList = (data) => {
  return (
    <div>
      {data.map((item, i) => (
        <Train key={i} {...item} item={item} />
      ))}
    </div>
  );
}
