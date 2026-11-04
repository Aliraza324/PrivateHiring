import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

