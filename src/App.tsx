import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Layout from './layout/Layout';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MenuPage from './pages/MenuPage';
import SelectionPage from './pages/SelectionPage';
import SaveinfoPage from './pages/SaveinfoPage';
import FullCollectorItem from './pages/FullCollectorItem';

import AuthContextProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/' element={<Layout />}>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/menu'
            element={
              <ProtectedRoute>
                <MenuPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/selection'
            element={
              <ProtectedRoute>
                <SelectionPage />
              </ProtectedRoute>
            }
          />
          <Route path='collectorItems/:id' element={<FullCollectorItem />} />
          <Route
            path='/saveinfo'
            element={
              <ProtectedRoute>
                <SaveinfoPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
