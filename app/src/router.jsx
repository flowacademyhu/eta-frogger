import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { LoginPage } from './pages/LoginPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { StudentManagementPage } from './pages/StudentManagementPage';
import { QrCardsPage } from './pages/QrCardsPage';
import { PracticePage } from './pages/PracticePage';
import { MarketPage } from './pages/MarketPage';
import { InventoryPage } from './pages/InventoryPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/belepes" replace />} />
      <Route path="/belepes" element={<LoginPage />} />
      <Route element={<AppShell />}>
        <Route path="/tanitvany" element={<StudentDashboardPage />} />
        <Route path="/tanitvany/gyakorlas" element={<PracticePage />} />
        <Route path="/tanitvany/piac" element={<MarketPage />} />
        <Route path="/tanitvany/tarisznya" element={<InventoryPage />} />
        <Route path="/mester" element={<AdminDashboardPage />} />
        <Route path="/mester/tanulok" element={<StudentManagementPage />} />
        <Route path="/mester/qr-kartyak" element={<QrCardsPage />} />
      </Route>
    </Routes>
  );
}
