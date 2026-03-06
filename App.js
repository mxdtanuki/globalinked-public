import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

// auth pages
import Login from './pages/login';
import Register from './pages/register';
import ForgetPass from './pages/forgetPass';
import ResetPass from './pages/resetPass';

//public page
import PublicPage from './pages/public-page/public-page';

// MOUMOAPage
import MOUMOAPublicPage from './pages/public-page/components/MOUMOAPublicPage';

// templates
import TemplatesPage from './pages/public-page/components/TemplatesPage';

// admin/faculty login
import FacultyLoginPage from './pages/public-page/components/FacultyLoginPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public page routes */}
        <Route path="/" element={<PublicPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/mou-moa" element={<MOUMOAPublicPage />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/forgot-password" element={<ForgetPass />} />
        <Route path="/resetPass" element={<ResetPass />} />    

        {/* Faculty/Admin login */}
        <Route path="/faculty-login" element={<FacultyLoginPage />} />

        {/* Redirect all other routes to home */}
        <Route path="*" element={<PublicPage />} />
      </Routes>
    </>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;