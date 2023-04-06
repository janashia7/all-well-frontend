import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccessPage from './pages/AccessPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { CssBaseline } from '@mui/material';
import ResetPasswordConfirmPage from './pages/ResetPasswordConfirmPage';
import CreateNewPasswordPage from './pages/CreateNewPasswordPage';
import ConfirmPasswordPage from './pages/ConfirmPasswordPage';
import SignUpPage from './pages/SignUpPage';
import ConfirmSignUpPage from './pages/ConfirmSignUpPage';
import DashboardPage from './pages/DashboardPage';
import LogOutPage from './pages/LogOutPage';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route index element={<AccessPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="confirm-signup" element={<ConfirmSignUpPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route
            path="reset-password/:token"
            element={<ResetPasswordConfirmPage />}
          />
          <Route
            path="create-password/:token"
            element={<CreateNewPasswordPage />}
          />
          <Route path="confirm-password" element={<ConfirmPasswordPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="log-out" element={<LogOutPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
