import React, { useState } from 'react';
import Phone from './../../../images/phone.svg';
import Mail from './../../../images/email.svg';
import Skype from './../../../images/skype.svg';
import Metka from './../../../images/metka.svg';
import { ReactComponent as Youtube } from './../../../images/youtube.svg';
import { ReactComponent as Linkedin } from './../../../images/linkedin.svg';
import { ReactComponent as Google } from './../../../images/google.svg';
import { ReactComponent as Facebook } from './../../../images/facebook.svg';
import { ReactComponent as Twitter } from './../../../images/twitter.svg';
import s from './contacts.module.css';
import { useForm } from 'react-hook-form';
import { api } from '../../../utils/api';
import { Modal } from '../../modals/modal/modal';

export const Contacts = () => {
  const [active, setActive] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.getSubscribe(data.email);
      setActive(true);
      reset();
    } catch (error) {
      console.log(error);
      reset();
    }
  };
  return (
    <section id='contacts' className={s.contacts}>
      <div className={s['contacts-content']}>
        <div className={s['contacts-content-left']}>
          <h3>Свяжитесь с нами</h3>
          <div className={s['contacts-content-left-group']}>
            <img src={Phone} alt='phone' className={s['group-image']} />
            <p className={s['group-text']}>8 (800) 000 00 00</p>
          </div>
          <div className={s['contacts-content-left-group']}>
            <img src={Mail} alt='email' className={s['group-image']} />
            <p className={s['group-text']}>inbox@mail.ru</p>
          </div>
          <div className={s['contacts-content-left-group']}>
            <img src={Skype} alt='skype' className={s['group-image']} />
            <p className={s['group-text']}>tu.train.tickets</p>
          </div>
          <div className={s['contacts-content-left-group']}>
            <img src={Metka} alt='address' className={s['group-image']} />
            <p className={s['group-text']}>
              г. Москва <br />
              ул. Московская 27-35 <br />
              555 555
            </p>
          </div>
        </div>
        <div className={s['contacts-content-right']}>
          <h3>Подписка</h3>
          <p className={s['contacts-content-right-subtitle']}>
            Будьте в курсе событий
          </p>
          <form
            className={s['contacts-subscribe']}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className={s['contacts-subscribe-input']}
              type='email'
              placeholder='email'
              name='email'
              required
              {...register('email')}
            />
            <button type='submit'>отправить</button>
          </form>
          <p className={s['contacts-content-right-subscribe']}>
            Подписывайтесь на нас
          </p>
          <ul className={s['contacts-socials']}>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-youtube']}
              >
                <Youtube className={s['contact-image']} />
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-linkedin']}
              >
                <Linkedin className={s['contact-image']} />
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-google']}
              >
                <Google className={s['contact-image']} />
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-facebook']}
              >
                <Facebook className={s['contact-image']} />
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-twitter']}
              >
                <Twitter className={s['contact-image']} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {active && (
        <Modal
          active={active}
          setActive={setActive}
          messages={'Вы успешно подписаны'}
        />
      )}
    </section>
  );
};
