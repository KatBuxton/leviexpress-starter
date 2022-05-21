import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';

export const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
};

