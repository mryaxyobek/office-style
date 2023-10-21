import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';

// pages 
import Home from './pages/Home';
import AboutPayment from './pages/AboutPayment';
import ContactPage from './pages/ContactPage';
import AboutCompanyPage from './pages/AboutCompanyPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path='/about-company' element={<AboutCompanyPage />} />
        <Route path='/about-payment' element={<AboutPayment />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
};

export default App;