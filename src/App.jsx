import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';
import CatalogRoot from './layouts/CatalogRoot';
import CategoryRoot from './layouts/CategoryRoot';
import ArticleRoot from './layouts/ArticleRoot';
import AkciyaRoot from './layouts/AkciyaRoot';

// pages 
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import ProductPage from './pages/ProductPage';
import AboutPayment from './pages/AboutPayment';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import AboutCompanyPage from './pages/AboutCompanyPage';
import ArticlesPage from './pages/ArticlesPage';
import Article from './pages/Article';
import Portfolio from './pages/Portfolio';
import Basket from './pages/Basket';
import AkciyaPage from './pages/AkciyaPage';
import AkciyaDetails from './pages/AkciyaDetails';
import NotificationPage from './pages/NotificationPage';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path='/basket' element={<Basket />} />

        {/* catalog  */}
        <Route path='/catalog' element={<CatalogRoot />}>
          <Route index element={<Catalog />} />
          <Route index path='/catalog' element={<Catalog />} />

          {/* products */}
          <Route path=':categoryName' element={<CategoryRoot />} >
            {/* index  */}
            <Route index element={<Category />} />
            {/* product */}
            <Route index path=':productName' element={<ProductPage />} />
          </Route >

        </Route>


        {/* articles  */}
        <Route path='/articles' element={<ArticleRoot />} >
          <Route index element={<ArticlesPage />} />
          <Route index path='/articles' element={<ArticlesPage />} />
          <Route path=':articleName' element={<Article />} />
        </Route>

        {/* akciya */}
        <Route path='/akciya' element={<AkciyaRoot />}>
          <Route index element={<AkciyaPage />} />
          <Route index path='/akciya' element={<AkciyaPage />} />
          <Route path=':akciyaName' element={<AkciyaDetails />} />
        </Route>

        <Route path='/about-company' element={<AboutCompanyPage />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/reviews' element={<ReviewsPage />} />


        <Route path='/about-payment' element={<AboutPayment />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/message/:message' element={<NotificationPage />} />
        <Route path='/policy' element={<Policy />} />

        {/* 404 not found page */}
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
};

export default App;