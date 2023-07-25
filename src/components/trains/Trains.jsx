import React from 'react';
import { TrainsList } from '../trainsList/TrainsList';
import { useSelector } from 'react-redux';
import { Crumbs } from '../crumbs/Crumbs';
import { DetailsFilter } from '../detailsFilter/DetailsFilter';
import s from './trains.module.css';

export const Trains = () => {
  const { trains } = useSelector((s) => s.trains);
  console.log(trains);
  // const { total } = useSelector((s) => s.total);
  // console.log(total);
  const trains1 = [
    {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      is_express: false,
      min_price: 691,
      available_seats: 62,
      available_seats_info: {
        fourth: 62,
        first: 18,
        third: 48,
      },
      departure: {
        _id: '64103b265c49ea00463587c6',
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: true,
        have_wifi: false,
        have_air_conditioning: false,
        is_express: false,
        min_price: 781,
        duration: 359640,
        available_seats: 62,
        available_seats_info: {
          fourth: 62,
        },
        train: {
          _id: '641037f05c49ea004632f86f',
          name: 'Брусника - 81',
        },
        from: {
          railway_station_name: 'Курский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690247718,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690607358,
        },
        price_info: {
          fourth: {
            top_price: 789,
            bottom_price: 781,
          },
        },
      },
      arrival: {
        _id: '641039235c49ea004633ec13',
        have_first_class: true,
        have_second_class: false,
        have_third_class: true,
        have_fourth_class: true,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 691,
        duration: 295080,
        available_seats: 128,
        available_seats_info: {
          first: 18,
          third: 48,
          fourth: 62,
        },
        train: {
          _id: '641037f05c49ea004632f88e',
          name: 'Транзит - 74',
        },
        from: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690765304,
        },
        to: {
          railway_station_name: 'Павелецкий',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1691060384,
        },
        price_info: {
          first: {
            price: 3765,
            top_price: 3715,
            bottom_price: 3065,
          },
          third: {
            top_price: 3360,
            bottom_price: 4185,
            side_price: 3535,
          },
          fourth: {
            top_price: 761,
            bottom_price: 691,
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
      min_price: 1749,
      available_seats: 36,
      available_seats_info: {
        second: 64,
        first: 36,
      },
      departure: {
        _id: '64103d725c49ea0046375f1f',
        have_first_class: false,
        have_second_class: true,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 1749,
        duration: 318480,
        available_seats: 64,
        available_seats_info: {
          second: 64,
        },
        train: {
          _id: '641037f15c49ea004632f89f',
          name: 'Брусника - 73',
        },
        from: {
          railway_station_name: 'Курский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690254727,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690573207,
        },
        price_info: {
          second: {
            top_price: 1749,
            bottom_price: 1932,
          },
        },
      },
      arrival: {
        _id: '64103b4a5c49ea004635a4be',
        have_first_class: true,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 3775,
        duration: 339780,
        available_seats: 36,
        available_seats_info: {
          first: 36,
        },
        train: {
          _id: '641037f15c49ea004632f8ab',
          name: 'Зевс - 11',
        },
        from: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690786374,
        },
        to: {
          railway_station_name: 'Павелецкий',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1691126154,
        },
        price_info: {
          first: {
            price: 3775,
            top_price: 4185,
            bottom_price: 4220,
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
      min_price: 652,
      available_seats: 98,
      available_seats_info: {
        first: 18,
        second: 32,
        fourth: 62,
        third: 48,
      },
      departure: {
        _id: '64103b3a5c49ea00463597e5',
        have_first_class: true,
        have_second_class: true,
        have_third_class: false,
        have_fourth_class: true,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 652,
        duration: 102720,
        available_seats: 112,
        available_seats_info: {
          first: 18,
          second: 32,
          fourth: 62,
        },
        train: {
          _id: '641037f05c49ea004632f82d',
          name: 'Транзит - 11',
        },
        from: {
          railway_station_name: 'Белорусский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690265318,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690368038,
        },
        price_info: {
          first: {
            price: 4610,
            top_price: 3115,
            bottom_price: 3405,
          },
          second: {
            top_price: 2556,
            bottom_price: 2313,
          },
          fourth: {
            top_price: 973,
            bottom_price: 652,
          },
        },
      },
      arrival: {
        _id: '64103b615c49ea004635b7ba',
        have_first_class: true,
        have_second_class: true,
        have_third_class: true,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 2232,
        duration: 355680,
        available_seats: 98,
        available_seats_info: {
          first: 18,
          second: 32,
          third: 48,
        },
        train: {
          _id: '641037f05c49ea004632f869',
          name: 'Зевс - 8',
        },
        from: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690786518,
        },
        to: {
          railway_station_name: 'Киевский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1691142198,
        },
        price_info: {
          first: {
            price: 3265,
            top_price: 3205,
            bottom_price: 4115,
          },
          second: {
            top_price: 2493,
            bottom_price: 2232,
          },
          third: {
            top_price: 2685,
            bottom_price: 4370,
            side_price: 4665,
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
      min_price: 522,
      available_seats: 96,
      available_seats_info: {
        third: 48,
        second: 32,
        fourth: 124,
      },
      departure: {
        _id: '64103d205c49ea0046371d25',
        have_first_class: false,
        have_second_class: false,
        have_third_class: true,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 2970,
        duration: 180480,
        available_seats: 96,
        available_seats_info: {
          third: 96,
        },
        train: {
          _id: '641037f15c49ea004632f8bf',
          name: 'Тройка - 18',
        },
        from: {
          railway_station_name: 'Павелецкий',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690268684,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690449164,
        },
        price_info: {
          third: {
            top_price: 3735,
            bottom_price: 3920,
            side_price: 2970,
          },
        },
      },
      arrival: {
        _id: '64103d5a5c49ea0046374bc4',
        have_first_class: false,
        have_second_class: true,
        have_third_class: true,
        have_fourth_class: true,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 522,
        duration: 247920,
        available_seats: 204,
        available_seats_info: {
          second: 32,
          third: 48,
          fourth: 124,
        },
        train: {
          _id: '641037ef5c49ea004632f79e',
          name: 'Транзит - 62',
        },
        from: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690794403,
        },
        to: {
          railway_station_name: 'Ленинградский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1691042323,
        },
        price_info: {
          second: {
            top_price: 2784,
            bottom_price: 2937,
          },
          third: {
            top_price: 3725,
            bottom_price: 4055,
            side_price: 3785,
          },
          fourth: {
            top_price: 595,
            bottom_price: 522,
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
      min_price: 552,
      available_seats: 142,
      available_seats_info: {
        second: 32,
        third: 48,
        fourth: 62,
      },
      departure: {
        _id: '6410392d5c49ea004633f40c',
        have_first_class: false,
        have_second_class: true,
        have_third_class: true,
        have_fourth_class: true,
        have_wifi: false,
        have_air_conditioning: true,
        is_express: false,
        min_price: 813,
        duration: 324720,
        available_seats: 174,
        available_seats_info: {
          second: 64,
          third: 48,
          fourth: 62,
        },
        train: {
          _id: '641037ef5c49ea004632f7c3',
          name: 'Калина - 26',
        },
        from: {
          railway_station_name: 'Ленинградский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1690276913,
        },
        to: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690601633,
        },
        price_info: {
          second: {
            top_price: 1518,
            bottom_price: 2322,
          },
          third: {
            top_price: 4045,
            bottom_price: 3460,
            side_price: 2650,
          },
          fourth: {
            top_price: 813,
            bottom_price: 983,
          },
        },
      },
      arrival: {
        _id: '64103b395c49ea0046359714',
        have_first_class: false,
        have_second_class: true,
        have_third_class: true,
        have_fourth_class: true,
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
        min_price: 552,
        duration: 314460,
        available_seats: 142,
        available_seats_info: {
          second: 32,
          third: 48,
          fourth: 62,
        },
        train: {
          _id: '641037ef5c49ea004632f796',
          name: 'Калина - 7',
        },
        from: {
          railway_station_name: 'Адлер',
          city: {
            _id: '641037eb5c49ea004632ee72',
            name: 'адлер',
          },
          datetime: 1690803217,
        },
        to: {
          railway_station_name: 'Киевский',
          city: {
            _id: '641037eb5c49ea004632ee6e',
            name: 'москва',
          },
          datetime: 1691117677,
        },
        price_info: {
          second: {
            top_price: 2634,
            bottom_price: 2076,
          },
          third: {
            top_price: 2680,
            bottom_price: 4745,
            side_price: 3140,
          },
          fourth: {
            top_price: 552,
            bottom_price: 819,
          },
        },
      },
    },
  ];

  const data = trains.length !== 0 ? trains : trains1;
  const totals = trains.length !== 0 ? trains.length : trains1.length;
  return (
    <div className={s['trains']}>
      <Crumbs progress={1} />
      <div className={s['trains-content']}>
        <DetailsFilter />
        <TrainsList trains={data} total={totals} />
      </div>
    </div>
  );
};
