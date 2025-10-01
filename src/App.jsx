import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Primemembers from './pages/Primemembers';
import Transaction from './pages/Transaction';
import Users from './pages/Users';
import Team from './pages/Messages';
import Settings from './pages/Settings';
import Billers from './pages/Billers';
import Billpayments from './pages/Billpayments';
import Paymentgateway from './pages/Paymentgateway';
import Kyc from './pages/Kyc';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

// Import CSS files
import './assets/css/slick.css';
import './assets/css/aos.css';
import './assets/css/output.css';
import './assets/css/style.css';

// Import JavaScript functions
import { initializeAll } from './utils/functions';

function App() {
  useEffect(() => {
    // Initialize all JavaScript functionality
    initializeAll();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected routes with layout */}
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="primemembers" element={<Primemembers />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="users" element={<Users />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
          <Route path="billers" element={<Billers />} />
          <Route path="billpayments" element={<Billpayments />} />
          <Route path="paymentgateway" element={<Paymentgateway />} />
          <Route path="kyc" element={<Kyc />} />
          <Route path="coming-soon" element={<ComingSoon />} />
        </Route>
        
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
