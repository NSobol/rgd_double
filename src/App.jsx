import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { LoadingSearchPage } from './pages/loadingSearchPage/LoadingSearchPage';
import { SuccessfulOrderPage } from './pages/successfulOrderPage/SuccessfulOrderPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loading' element={<LoadingSearchPage />} />
        <Route path='/fulorder' element={<SuccessfulOrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
