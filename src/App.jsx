import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// pages 
import Home from './pages/Home';

// layouts 
import MainRoot from './layouts/MainRoot';
import AboutPayment from './pages/AboutPayment';
import ContactPage from './pages/ContactPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />
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