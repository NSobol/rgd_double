import React from 'react';
import { HeaderFinal } from '../../components/headerBlock/headerFinal/HeaderFinal';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';
import s from './successfulOrderPage.module.css';
import { SuccessfulOrder } from '../../components/successfulOrder/SuccessfulOrder';

export const SuccessfulOrderPage = () => {
  return (
    <div>
      <HeaderFinal />
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.fulOrder}>
            <SuccessfulOrder />
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};
