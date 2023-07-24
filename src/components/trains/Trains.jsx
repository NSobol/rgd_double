import React from 'react';
import { TrainsList } from '../trainsList/TrainsList';
import { useSelector } from 'react-redux';
import { Crumbs } from '../crumbs/Crumbs';
import { DetailsFilter } from '../detailsFilter/DetailsFilter';
import s from './trains.module.css';

export const Trains = () => {
  const { trains } = useSelector((s) => s.trains);
  const trains1 = [
    {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      is_express: false,
      min_price: 3105,
      available_seats: 84,
      available_seats_info: {
        first: 36,
        third: 48,
      },
      departure: {
        _id: '64103b105c49ea004635762b',
        have_first_class: true,
        have_second_class: false,
        have_third_class: true,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 3105,
        duration: 233520,
        available_seats: 84,
        available_seats_info: {
          first: 36,
          third: 48,
        },
        train: {
          _id: '641037f05c49ea004632f82a',
          name: 'Брусника - 88',
        },
        from: {
          railway_station_name: 'Павелецкий',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690072376,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690305896,
        },
        price_info: {
          first: {
            price: 3775,
            top_price: 3415,
            bottom_price: 3710,
          },
          third: {
            top_price: 4380,
            bottom_price: 4030,
            side_price: 3105,
          },
        },
      },
    },
    {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      is_express: false,
      min_price: 794,
      available_seats: 62,
      available_seats_info: {
        fourth: 62,
      },
      departure: {
        _id: '64103d1c5c49ea00463719b9',
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: true,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 794,
        duration: 318120,
        available_seats: 62,
        available_seats_info: {
          fourth: 62,
        },
        train: {
          _id: '641037ef5c49ea004632f78d',
          name: 'Транзит - 65',
        },
        from: {
          railway_station_name: 'Ленинградский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690087900,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690406020,
        },
        price_info: {
          fourth: {
            top_price: 794,
            bottom_price: 951,
          },
        },
      },
    },
    {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      is_express: false,
      min_price: 1539,
      available_seats: 64,
      available_seats_info: {
        second: 64,
      },
      departure: {
        _id: '64103d515c49ea00463743f8',
        have_first_class: false,
        have_second_class: true,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 1539,
        duration: 131700,
        available_seats: 64,
        available_seats_info: {
          second: 64,
        },
        train: {
          _id: '641037f05c49ea004632f83a',
          name: 'Брусника - 8',
        },
        from: {
          railway_station_name: 'Ярославский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690095633,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690227333,
        },
        price_info: {
          second: {
            top_price: 1539,
            bottom_price: 2040,
          },
        },
      },
    },
    {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      is_express: false,
      min_price: 2475,
      available_seats: 80,
      available_seats_info: {
        second: 32,
        third: 48,
      },
      departure: {
        _id: '64103b455c49ea004635a151',
        have_first_class: false,
        have_second_class: true,
        have_third_class: true,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: false,
        is_express: false,
        min_price: 2475,
        duration: 142620,
        available_seats: 80,
        available_seats_info: {
          second: 32,
          third: 48,
        },
        train: {
          _id: '641037f15c49ea004632f899',
          name: 'Калина - 94',
        },
        from: {
          railway_station_name: 'Курский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690099850,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690242470,
        },
        price_info: {
          second: {
            top_price: 2607,
            bottom_price: 2475,
          },
          third: {
            top_price: 4995,
            bottom_price: 4970,
            side_price: 3755,
          },
        },
      },
    },
    {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      is_express: false,
      min_price: 1623,
      available_seats: 64,
      available_seats_info: {
        second: 64,
      },
      departure: {
        _id: '64103d515c49ea004637444c',
        have_first_class: false,
        have_second_class: true,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 1623,
        duration: 370620,
        available_seats: 64,
        available_seats_info: {
          second: 64,
        },
        train: {
          _id: '641037ef5c49ea004632f7bd',
          name: 'undefined - 53',
        },
        from: {
          railway_station_name: 'Киевский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690100314,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690470934,
        },
        price_info: {
          second: {
            top_price: 1833,
            bottom_price: 1623,
          },
        },
      },
    },
  ];
  return (
    <div className={s['trains']}>
      <Crumbs progress={1} />
      <div className={s['trains-content']}>
        <DetailsFilter />
        <TrainsList trains={ trains1} />
      </div>
    </div>
  );
};
