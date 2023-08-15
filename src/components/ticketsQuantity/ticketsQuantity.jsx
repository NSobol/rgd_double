import React, { useEffect, useState } from 'react';
import s from './ticketsQuantity.module.css';

export const TicketsQuantity = () => {
  const maxAdultTicketsCount = 5;
  const [quantityAdult, setQuantityAdult] = useState(0);
  const [quantityChildren, setQuantityChildren] = useState(0);
  const [maxQuantityChildren, setMaxQuantityChildren] = useState(0);
  const [quantityChildrenNoPlace, setQuantityChildrenNoPlace] = useState(0);
  const [maxQuantityChildrenNoPlace, setMaxQuantityChildrenNoPlace] = useState(0);

  useEffect(() => {
    if (quantityAdult * 2 - quantityChildrenNoPlace < quantityChildren) {
      setQuantityChildren(quantityChildren > 1 ? quantityAdult * 2 - quantityChildrenNoPlace : 0);
    }
    if (quantityAdult >= quantityChildren && quantityAdult < quantityChildrenNoPlace) {
      setQuantityChildrenNoPlace(quantityAdult);
    } else if (quantityAdult < quantityChildren && quantityAdult < quantityChildrenNoPlace) {
      setMaxQuantityChildrenNoPlace(
        quantityChildrenNoPlace > 0 ? quantityAdult * 2 - quantityChildren : 0
      );
    }

    setMaxQuantityChildren(quantityAdult * 2 - quantityChildrenNoPlace);

    if (quantityAdult > quantityChildren) {
      setMaxQuantityChildrenNoPlace(quantityAdult);
    } else {
      setMaxQuantityChildrenNoPlace(quantityAdult * 2 - quantityChildren);
    }
  }, [
    quantityAdult,
    quantityChildren,
    quantityChildrenNoPlace,
    maxQuantityChildren,
    maxQuantityChildrenNoPlace,
  ]);

  return (
    <div>
      <span className={s['title']}>Количество билетов</span>
      <div className={s['ticketsQuantityContainer']}>
        <div className={s['ticketSelector-container']}>
          <label>
            <div className={s['container']}>
              <span className={s['prefix']}>Взрослых —</span>
              <input
                className={s['input']}
                type='number'
                min={0}
                max={maxAdultTicketsCount}
                value={quantityAdult}
                onChange={(e) => setQuantityAdult(Number(e.target.value))}
              />
            </div>
          </label>
          {!!quantityAdult && quantityAdult !== 5 && (
            <span>Можно добавить еще {maxAdultTicketsCount - quantityAdult} пассажиров</span>
          )}
          {quantityAdult === 5 && <span>Максимум 5 билетов за один заказ</span>}
        </div>
        <div className={s['ticketSelector-container']}>
          <label>
            <div className={s['container']}>
              <span className={s['prefix']}>Детских —</span>
              <input
                className={s['input']}
                type='number'
                min={0}
                max={maxQuantityChildren}
                value={quantityChildren}
                onChange={(e) => setQuantityChildren(Number(e.target.value))}
              />
            </div>
          </label>
          {!!quantityAdult && quantityChildren !== maxQuantityChildren && (
            <span>
              Можно добавить еще {maxQuantityChildren - quantityChildren} детей до 10 лет.Свое место
              в вагоне, как у взрослых, но дешевле в среднем на 50-65%
            </span>
          )}
        </div>
        <div className={s['ticketSelector-container']}>
          <label>
            <div className={s['container']}>
              <span className={s['prefix']}>Детских «без места» —</span>
              <input
                className={s['input']}
                type='number'
                min={0}
                max={maxQuantityChildrenNoPlace}
                value={quantityChildrenNoPlace}
                onChange={(e) => setQuantityChildrenNoPlace(Number(e.target.value))}
              />
            </div>
          </label>
          {!!quantityAdult && quantityChildrenNoPlace !== maxQuantityChildrenNoPlace && (
            <span>
              Можно добавить еще {maxQuantityChildrenNoPlace - quantityChildrenNoPlace} детей до 5
              лет без занятия отдельного места.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
