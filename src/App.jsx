import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useUser } from './state/user/hook';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import CreateBlogPage from './pages/CreateBlog';

const App = () => {
  const { user } = useUser();

  return (
    <BrowserRouter>
      {user ? (
        <Routes>
          <Route path={'/profile'} element={<ProfilePage />} />
          {user.role === 'admin' && (
            <Route path={'/createBlog'} element={<CreateBlogPage />} />
          )}
          <Route path="*" element={<Navigate to="/profile" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
