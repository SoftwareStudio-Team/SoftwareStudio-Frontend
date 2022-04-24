import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AccountsApi from '../api/accounts';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await AccountsApi.create({
        username,
        password,
        firstName,
        lastName,
        birthDate,
      });
      navigate('/login');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-1/2 bg-white p-8 m-4">
        <h1 className="block w-full text-center text-2xl font-bold mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg" htmlFor="first_name">
              First Name
            </label>
            <input
              className="border py-2 px-3 rounded-md outline-none"
              type="text"
              name="first_name"
              id="first_name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg " htmlFor="last_name">
              Last Name
            </label>
            <input
              className="border py-2 px-3 rounded-md outline-none"
              type="text"
              name="last_name"
              id="last_name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg" htmlFor="username">
              Username
            </label>
            <input
              className="border py-2 px-3 rounded-md outline-none"
              type="text"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg" htmlFor="password">
              Password
            </label>
            <input
              className="border py-2 px-3 rounded-md outline-none"
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg" htmlFor="Date">
              Date
            </label>
            <input
              className="border py-2 px-3 rounded-md outline-none"
              type="date"
              name="birthDate"
              id="birthDate"
              required
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-10 flex justify-center items-center mx-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 rounded-full w-full md:w-36 h-9 ease-in-out duration-300"
          >
            Sign Up
          </button>
        </form>
        <a
          className="font-bold block w-full text-center no-underline mt-4 text-sm text-gray-500 hover:text-teal-600 ease-in-out duration-300"
          href="/login"
        >
          Already have an account?
        </a>
      </div>
    </div>
  );
};
export default RegisterPage;
