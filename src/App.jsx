import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { LoadingSearchPage } from './pages/loadingSearchPage/LoadingSearchPage';
import { SuccessfulOrderPage } from './pages/successfulOrderPage/SuccessfulOrderPage';
import { PaymentPage } from './pages/paymentPage/PaymentPage';
import { OrderConfirmationPage } from './pages/orderConfirmationPage/OrderConfirmationPage';
import { ListTrainsPage } from './pages/listTrainsPage/ListTrainsPage';
import { TicketsPage } from './pages/ticketsPage/TicketsPage';
import { PassengersPage } from './pages/passengersPage/PassengersPage';
// import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loading' element={<LoadingSearchPage />} />
        <Route path='/stepone' element={<ListTrainsPage />} />
        <Route path='/steptwo' element={<TicketsPage />} />
        <Route path='/stepthree' element={<PassengersPage />} />
        <Route path='/fulorder' element={<SuccessfulOrderPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/confirm' element={<OrderConfirmationPage />} />
      </Routes>
    </div>
  );
}

export default App;
