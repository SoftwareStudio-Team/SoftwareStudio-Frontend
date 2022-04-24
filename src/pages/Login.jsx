import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../state/user/hook';

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    user,
    reducers: { login },
  } = useUser();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-40 w-auto"
            src={'../../img/praying-green.png'}
          />
          <p className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              className="font-medium text-teal-500 hover:text-teal-600 ease-in-out duration-300"
              href="/register"
            >
              {' '}
              If you don't have account{' '}
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 rounded-full w-full md:w-36 h-9 ease-in-out duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
