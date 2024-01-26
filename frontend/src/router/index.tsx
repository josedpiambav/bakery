// React
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import LadingPage from "pages/landingPage/ladingPage";
import AboutUs from "pages/aboutUs/aboutUs";
import Products from 'pages/products/products';
import ProductsDetails from 'pages/productsDetails/productsDetails';
import Career from 'pages/career/career';
import CareerDetails from 'pages/careerDetail/careerDetails';
import NewDetail from 'pages/newDetail/newDetail';
import News from 'pages/news/news';
import Location from 'pages/location/location';
import Impressum from 'pages/impressum/impressum';
import Error from 'pages/error';

const Index = () => {
  return (
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<LadingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details-products" element={<ProductsDetails />} />
        <Route path="/jobs" element={<Career />} />
        <Route path="/careerDetail" element={<CareerDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/NewDetail" element={<NewDetail />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
  );
}

export default Index;