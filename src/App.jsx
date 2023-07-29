import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { LoadingSearchPage } from './pages/loadingSearchPage/LoadingSearchPage';
import { SuccessfulOrderPage } from './pages/successfulOrderPage/SuccessfulOrderPage';
import { OrderConfirmationPage } from './pages/orderConfirmationPage/OrderConfirmationPage';
import { ListTrainsPage } from './pages/listTrainsPage/ListTrainsPage';
import { TicketsPage } from './pages/ticketsPage/TicketsPage';
import { PassengersPage } from './pages/passengersPage/PassengersPage';
import { Header } from './components/headerBlock/header/Header';
import { FooterContainer } from './components/footerBlock/footerContainer/FooterContainer';
import { Payment } from './components/payment/Payment';

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loading' element={<LoadingSearchPage />} />
        <Route path='/stepone' element={<ListTrainsPage />} />
        <Route path='/steptwo' element={<TicketsPage />} />
        <Route path='/stepthree' element={<PassengersPage />} />
        <Route path='/fulorder' element={<SuccessfulOrderPage />} />
        <Route path='/payment' element={<Payment  />} />
        <Route path='/confirm' element={<OrderConfirmationPage />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
