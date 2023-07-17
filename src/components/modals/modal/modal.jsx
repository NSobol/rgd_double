import React from 'react';
import Info from './../../../images/info.png';
import Error from './../../../images/error.png';
import './modal.css';

export const Modal = ({ active, setActive, messages, type = 'info' }) => {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className={active ? 'modal__content active' : 'modal__content'}>
        <div className='modal-header'>
          {type === 'info' ? (
            <div className='info'>
              <img src={Info} alt='Информация' />
            </div>
          ) : (
            <div className='error'>
              <img src={Error} alt='Ошибка' />
            </div>
          )}
        </div>
        <div className='content'>{messages}</div>
        <div className='modal-footer'>
          <button className='modal__close' onClick={() => setActive(false)}>
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};
