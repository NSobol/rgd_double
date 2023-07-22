import React from 'react';
import { DetailsTrip } from '../detailsTrip/DetailsTrip';
import { TrainsList } from '../trainsList/TrainsList';
import s from './trains.module.css';
import { useSelector } from 'react-redux';

export const Trains = () => {
  // const trains = [
  //   {
  //     available_seats: 80,
  //     available_seats_info: { second: 32, third: 48 },
  //     departure: {
  //       available_seats: 80,
  //       available_seats_info: {
  //         second: 32,
  //         third: 48,
  //       },
  //       duration: 134640,
  //       from: {
  //         city: { _id: '641037eb5c49ea004632ee6e', name: 'москва' },
  //         datetime: 1689726807,
  //         railway_station_name: 'Белорусский',
  //       },
  //       have_air_conditioning: true,
  //       have_first_class: false,
  //       have_fourth_class: false,
  //       have_second_class: true,
  //       have_third_class: true,
  //       have_wifi: true,
  //       is_express: false,
  //       min_price: 2061,
  //       price_info: {
  //         second: {
  //           bottom_price: 2307,
  //           top_price: 2061,
  //         },
  //         third: {
  //           bottom_price: 4125,
  //           side_price: 2815,
  //           top_price: 4365,
  //         },
  //       },
  //       to: {
  //         city: {
  //           name: 'астрахань',
  //           _id: '641037eb5c49ea004632ee70',
  //         },
  //         datetime: 1689861447,
  //         railway_station_name: 'Астрахань',
  //       },
  //       train: {
  //         name: 'undefined - 63',
  //         _id: '641037f05c49ea004632f81f',
  //       },
  //       _id: '64103b2f5c49ea0046358ef8',
  //     },
  //     have_air_conditioning: false,
  //     have_first_class: false,
  //     have_fourth_class: false,
  //     have_second_class: false,
  //     have_third_class: false,
  //     have_wifi: false,
  //     is_express: false,
  //     min_price: 2061,
  //   },
  //   {
  //     available_seats: 80,
  //     available_seats_info: { second: 32, third: 48 },
  //     departure: {
  //       available_seats: 80,
  //       available_seats_info: {
  //         second: 32,
  //         third: 48,
  //       },
  //       duration: 134640,
  //       from: {
  //         city: { _id: '641037eb5c49ea004632ee6e', name: 'москва' },
  //         datetime: 1689726807,
  //         railway_station_name: 'Белорусский',
  //       },
  //       have_air_conditioning: true,
  //       have_first_class: false,
  //       have_fourth_class: false,
  //       have_second_class: true,
  //       have_third_class: true,
  //       have_wifi: true,
  //       is_express: false,
  //       min_price: 2061,
  //       price_info: {
  //         second: {
  //           bottom_price: 2307,
  //           top_price: 2061,
  //         },
  //         third: {
  //           bottom_price: 4125,
  //           side_price: 2815,
  //           top_price: 4365,
  //         },
  //       },
  //       to: {
  //         city: {
  //           name: 'астрахань',
  //           _id: '641037eb5c49ea004632ee70',
  //         },
  //         datetime: 1689861447,
  //         railway_station_name: 'Астрахань',
  //       },
  //       train: {
  //         name: 'undefined - 63',
  //         _id: '641037f05c49ea004632f81f',
  //       },
  //       _id: '64103b2f5c49ea0046358ef8',
  //     },
  //     have_air_conditioning: false,
  //     have_first_class: false,
  //     have_fourth_class: false,
  //     have_second_class: false,
  //     have_third_class: false,
  //     have_wifi: false,
  //     is_express: false,
  //     min_price: 2061,
  //   },
  //   {
  //     available_seats: 80,
  //     available_seats_info: { second: 32, third: 48 },
  //     departure: {
  //       available_seats: 80,
  //       available_seats_info: {
  //         second: 32,
  //         third: 48,
  //       },
  //       duration: 134640,
  //       from: {
  //         city: { _id: '641037eb5c49ea004632ee6e', name: 'москва' },
  //         datetime: 1689726807,
  //         railway_station_name: 'Белорусский',
  //       },
  //       have_air_conditioning: true,
  //       have_first_class: false,
  //       have_fourth_class: false,
  //       have_second_class: true,
  //       have_third_class: true,
  //       have_wifi: true,
  //       is_express: false,
  //       min_price: 2061,
  //       price_info: {
  //         second: {
  //           bottom_price: 2307,
  //           top_price: 2061,
  //         },
  //         third: {
  //           bottom_price: 4125,
  //           side_price: 2815,
  //           top_price: 4365,
  //         },
  //       },
  //       to: {
  //         city: {
  //           name: 'астрахань',
  //           _id: '641037eb5c49ea004632ee70',
  //         },
  //         datetime: 1689861447,
  //         railway_station_name: 'Астрахань',
  //       },
  //       train: {
  //         name: 'undefined - 63',
  //         _id: '641037f05c49ea004632f81f',
  //       },
  //       _id: '64103b2f5c49ea0046358ef8',
  //     },
  //     have_air_conditioning: false,
  //     have_first_class: false,
  //     have_fourth_class: false,
  //     have_second_class: false,
  //     have_third_class: false,
  //     have_wifi: false,
  //     is_express: false,
  //     min_price: 2061,
  //   },
  //   {
  //     available_seats: 80,
  //     available_seats_info: { second: 32, third: 48 },
  //     departure: {
  //       available_seats: 80,
  //       available_seats_info: {
  //         second: 32,
  //         third: 48,
  //       },
  //       duration: 134640,
  //       from: {
  //         city: { _id: '641037eb5c49ea004632ee6e', name: 'москва' },
  //         datetime: 1689726807,
  //         railway_station_name: 'Белорусский',
  //       },
  //       have_air_conditioning: true,
  //       have_first_class: false,
  //       have_fourth_class: false,
  //       have_second_class: true,
  //       have_third_class: true,
  //       have_wifi: true,
  //       is_express: false,
  //       min_price: 2061,
  //       price_info: {
  //         second: {
  //           bottom_price: 2307,
  //           top_price: 2061,
  //         },
  //         third: {
  //           bottom_price: 4125,
  //           side_price: 2815,
  //           top_price: 4365,
  //         },
  //       },
  //       to: {
  //         city: {
  //           name: 'астрахань',
  //           _id: '641037eb5c49ea004632ee70',
  //         },
  //         datetime: 1689861447,
  //         railway_station_name: 'Астрахань',
  //       },
  //       train: {
  //         name: 'undefined - 63',
  //         _id: '641037f05c49ea004632f81f',
  //       },
  //       _id: '64103b2f5c49ea0046358ef8',
  //     },
  //     have_air_conditioning: false,
  //     have_first_class: false,
  //     have_fourth_class: false,
  //     have_second_class: false,
  //     have_third_class: false,
  //     have_wifi: false,
  //     is_express: false,
  //     min_price: 2061,
  //   },
  // ];
  const { trains } = useSelector((s) => s.trains);
  return (
    <div className={s['trains']}>
      <div className={s['payment-breadCrumbs']}></div>
      <div className={s['trains-content']}>
        <DetailsTrip />
        <TrainsList trains={trains ?? []} />
      </div>
    </div>
  );
};
