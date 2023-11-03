import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';
import CatalogRoot from './layouts/CatalogRoot';
import FurnitureForStaffRoot from './layouts/FurnitureForStaffRoot';
import ArticleRoot from './layouts/ArticleRoot';

// pages 
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutPayment from './pages/AboutPayment';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import AboutCompanyPage from './pages/AboutCompanyPage';
import FurnitureForStaff from './pages/FurnitureForStaff';
import ArticlesPage from './pages/ArticlesPage';
import Category from './pages/Category';
import Portfolio from './pages/Portfolio';
import Article from './pages/Article';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />

        {/* catalog  */}
        <Route path='/catalog' element={<CatalogRoot />}>
          <Route index element={<Catalog />} />
          <Route index path='/catalog' element={<Catalog />} />

          {/* FurnitureForStaff */}
          <Route path='furniture-for-staff' element={<FurnitureForStaffRoot />} >
            <Route index element={<FurnitureForStaff />} />
            <Route index path='furniture-for-staff' element={<FurnitureForStaff />} />
            {/* category */}
            <Route index path='product-name' element={<Category />} />
          </Route >

        </Route>

        <Route path='/about-company' element={<AboutCompanyPage />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/reviews' element={<ReviewsPage />} />

        <Route path='/articles' element={<ArticleRoot />} >
          <Route index element={<ArticlesPage />} />
          <Route index path='/articles' element={<ArticlesPage />} />
          <Route path='article-name' element={<Article />} />
        </Route>

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