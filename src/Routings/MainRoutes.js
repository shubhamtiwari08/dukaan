import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import Order from '../Pages/Order';
import Products from '../Pages/Products';
import Delivery from '../Pages/Delivery';
import Marketing from '../Pages/Marketing';
import Analytics from '../Pages/Analytics';
import Payout from '../Pages/Payout';
import Plugins from '../Pages/Plugins';
import Appearance from '../Pages/Appearance';
import Audience from '../Pages/Audience';
import Discount from '../Pages/Discount';

function MainRoutes() {
  return (
    <Routes>
    <Route path="/pay" element={<Dashboard />}/>
      <Route path="orders" element={<Order/>} />
      <Route path="products" element={<Products />} />
      <Route path="delivery" element={<Delivery />} />
      <Route path="marketing" element={<Marketing />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="payouts" element={<Payout />} />
      <Route path="discounts" element={<Discount />} />
      <Route path="audience" element={<Audience />} />
      <Route path="appearance" element={<Appearance />} />
      <Route path="plugins" element={<Plugins />} />
  </Routes>
  )
}

export default MainRoutes