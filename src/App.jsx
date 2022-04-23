import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useUser } from './state/user/hook';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import CreateBlogPage from './pages/CreateBlog';
import ProfilePage from './pages/Profile';

const App = () => {
  const { user } = useUser();

  return (
    <BrowserRouter>
      {user ? (
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/blog/:id'} element={<BlogPage />} />
          {user.role === 'admin' && (
            <Route path={'/createBlog'} element={<CreateBlogPage />} />
          )}
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
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
