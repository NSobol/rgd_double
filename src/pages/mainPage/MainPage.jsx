import React from 'react';
import { AboutUs } from './../../components/main/aboutUs/AboutUs';
import { HowItWorks } from './../../components/main/howItWorks/HowItWorks';
import { Reviews } from '../../components/main/reviews/Reviews';

export const MainPage = () => {
  return (
    <div>
      <AboutUs />
      <HowItWorks />
      <Reviews />
    </div>
  );
};
