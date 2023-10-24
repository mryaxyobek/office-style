import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';

// pages 
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutPayment from './pages/AboutPayment';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import AboutCompanyPage from './pages/AboutCompanyPage';
import FurnitureForStaff from './pages/FurnitureForStaff';
import CatalogRoot from './layouts/CatalogRoot';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />

        <Route path='/catalog' element={<CatalogRoot />}>
          <Route index element={<Catalog />} />
          <Route index path='/catalog' element={<Catalog />} />
          <Route path='furniture-for-staff' element={<FurnitureForStaff />} />
        </Route>

        <Route path='/about-company' element={<AboutCompanyPage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
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