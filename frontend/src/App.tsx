import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './layout';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import PromotePage from './pages/PromotePage';
import OffersPage from './pages/OffersPage';
import PaymentPage from './pages/PaymentPage';
import ProfiPage from './pages/ProfiPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/:id" element={<ProfilePage />} />
        <Route path="/promote" element={<PromotePage />} />
        <Route path="/tasks" element={<ProfiPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Route>
    </Routes>
  );
};

export default App;
