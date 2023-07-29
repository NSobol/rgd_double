import React from 'react';
import { TrainsList } from '../../components/trainsList/TrainsList';
import { DetailsFilter } from '../../components/detailsFilter/DetailsFilter';
import { Crumbs } from '../../components/crumbs/Crumbs';
import { useSelector } from 'react-redux';
import s from './listTrainsPage.module.css';

export const ListTrainsPage = () => {
  const { trains } = useSelector((s) => s.trains);
  const total = useSelector((s) => s.trains.total);
  const data = {
    trains: [
      {
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: false,
        have_air_conditioning: false,
        is_express: false,
        min_price: 691,
        available_seats: 80,
        available_seats_info: {
          second: 32,
          third: 48,
          first: 18,
          fourth: 62,
        },
        departure: {
          _id: '64103b545c49ea004635acd8',
          have_first_class: false,
          have_second_class: true,
          have_third_class: true,
          have_fourth_class: false,
          have_wifi: true,
          have_air_conditioning: true,
          is_express: false,
          min_price: 2331,
          duration: 312900,
          available_seats: 80,
          available_seats_info: {
            second: 32,
            third: 48,
          },
          train: {
            _id: '641037ef5c49ea004632f7f6',
            name: 'Ласточка - 5',
          },
          from: {
            railway_station_name: 'Казанский',
            city: {
              _id: '641037eb5c49ea004632ee6e',
              name: 'москва',
            },
            datetime: 1690330024,
          },
          to: {
            railway_station_name: 'Адлер',
            city: {
              _id: '641037eb5c49ea004632ee72',
              name: 'адлер',
            },
            datetime: 1690642924,
          },
          price_info: {
            second: {
              top_price: 2331,
              bottom_price: 2415,
            },
            third: {
              top_price: 4020,
              bottom_price: 4720,
              side_price: 3380,
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
        min_price: 1647,
        available_seats: 36,
        available_seats_info: {
          second: 32,
          third: 96,
          first: 36,
        },
        departure: {
          _id: '64103d615c49ea0046375129',
          have_first_class: false,
          have_second_class: true,
          have_third_class: true,
          have_fourth_class: false,
          have_wifi: true,
          have_air_conditioning: true,
          is_express: false,
          min_price: 1647,
          duration: 299520,
          available_seats: 128,
          available_seats_info: {
            second: 32,
            third: 96,
          },
          train: {
            _id: '641037f15c49ea004632f8b5',
            name: 'Перун - 10',
          },
          from: {
            railway_station_name: 'Ярославский',
            city: {
              _id: '641037eb5c49ea004632ee6e',
              name: 'москва',
            },
            datetime: 1690344770,
          },
          to: {
            railway_station_name: 'Адлер',
            city: {
              _id: '641037eb5c49ea004632ee72',
              name: 'адлер',
            },
            datetime: 1690644290,
          },
          price_info: {
            second: {
              top_price: 1833,
              bottom_price: 1647,
            },
            third: {
              top_price: 2570,
              bottom_price: 2890,
              side_price: 3365,
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
        min_price: 2232,
        available_seats: 18,
        available_seats_info: {
          first: 18,
          second: 32,
          third: 48,
        },
        departure: {
          _id: '64103d455c49ea0046373afb',
          have_first_class: true,
          have_second_class: false,
          have_third_class: false,
          have_fourth_class: false,
          have_wifi: true,
          have_air_conditioning: true,
          is_express: false,
          min_price: 2805,
          duration: 96480,
          available_seats: 18,
          available_seats_info: {
            first: 18,
          },
          train: {
            _id: '641037f05c49ea004632f837',
            name: 'Калина - 61',
          },
          from: {
            railway_station_name: 'Киевский',
            city: {
              _id: '641037eb5c49ea004632ee6e',
              name: 'москва',
            },
            datetime: 1690350502,
          },
          to: {
            railway_station_name: 'Адлер',
            city: {
              _id: '641037eb5c49ea004632ee72',
              name: 'адлер',
            },
            datetime: 1690446982,
          },
          price_info: {
            first: {
              price: 4580,
              top_price: 3115,
              bottom_price: 2805,
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
        available_seats: 162,
        available_seats_info: {
          first: 18,
          third: 48,
          second: 32,
          fourth: 124,
        },
        departure: {
          _id: '64103d595c49ea0046374a68',
          have_first_class: true,
          have_second_class: false,
          have_third_class: true,
          have_fourth_class: false,
          have_wifi: true,
          have_air_conditioning: true,
          is_express: false,
          min_price: 2525,
          duration: 158280,
          available_seats: 162,
          available_seats_info: {
            first: 18,
            third: 144,
          },
          train: {
            _id: '641037ef5c49ea004632f7f3',
            name: 'Брусника - 12',
          },
          from: {
            railway_station_name: 'Киевский',
            city: {
              _id: '641037eb5c49ea004632ee6e',
              name: 'москва',
            },
            datetime: 1690351661,
          },
          to: {
            railway_station_name: 'Адлер',
            city: {
              _id: '641037eb5c49ea004632ee72',
              name: 'адлер',
            },
            datetime: 1690509941,
          },
          price_info: {
            first: {
              price: 2600,
              top_price: 4345,
              bottom_price: 3215,
            },
            third: {
              top_price: 2675,
              bottom_price: 2980,
              side_price: 2525,
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
          third: 48,
          fourth: 62,
          second: 32,
        },
        departure: {
          _id: '6410393e5c49ea0046340204',
          have_first_class: false,
          have_second_class: false,
          have_third_class: true,
          have_fourth_class: true,
          have_wifi: true,
          have_air_conditioning: true,
          is_express: false,
          min_price: 695,
          duration: 105480,
          available_seats: 172,
          available_seats_info: {
            third: 48,
            fourth: 124,
          },
          train: {
            _id: '641037ef5c49ea004632f7d8',
            name: 'Транзит - 66',
          },
          from: {
            railway_station_name: 'Киевский',
            city: {
              _id: '641037eb5c49ea004632ee6e',
              name: 'москва',
            },
            datetime: 1690373711,
          },
          to: {
            railway_station_name: 'Адлер',
            city: {
              _id: '641037eb5c49ea004632ee72',
              name: 'адлер',
            },
            datetime: 1690479191,
          },
          price_info: {
            third: {
              top_price: 4965,
              bottom_price: 3385,
              side_price: 4675,
            },
            fourth: {
              top_price: 695,
              bottom_price: 917,
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
    ],
    loading: true,
    total: 6,
    searchParams: {
      from_city_id: '641037eb5c49ea004632ee6e',
      from_city_name: 'москва',
      to_city_id: '641037eb5c49ea004632ee72',
      to_city_name: 'адлер',
      date_start: '2023-07-26',
      date_start_arrival: '',
      date_end: '2023-07-31',
      date_end_arrival: '',
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      have_express: false,
      price_from: 300,
      price_to: 7000,
      start_departure_hour_from: 0,
      start_departure_hour_to: 24,
      start_arrival_hour_from: 0,
      start_arrival_hour_to: 24,
      end_departure_hour_from: 0,
      end_departure_hour_to: 24,
      end_arrival_hour_from: 0,
      end_arrival_hour_to: 24,
      limit: 5,
      offset: 0,
      sort: 'date',
    },
    currentRoute: {},
    departureCoach: [],
    departureCoachType: '',
    departureFilteredCoach: [],
    arrivalCoach: [],
    arrivalCoachType: '',
    arrivalFilteredCoach: [],
  };

  const trains1 = data.trains;

  const data1 = trains.length > 0 ? trains : trains1;
  const totals = trains.length > 0 ? total : data.total;

  return (
    <div className={s['trains']}>
      <Crumbs progress={1} />
      <div className={s['trains-content']}>
        <DetailsFilter />
        <TrainsList trains={data1} total={totals} />
      </div>
    </div>
  );
};
