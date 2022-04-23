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
    console.log('asd');
    //TODO : may apply with redux like LoginPage
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
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
          Register
        </h1>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="first_name"
              id="first_name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="last_name"
              id="last_name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="Date"
            >
              Date
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="date"
              name="birthDate"
              id="birthDate"
              required
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <button
            className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <a
          className="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
          href="/login"
        >
          Already have an account?
        </a>
      </div>
    </div>
  );
};
export default RegisterPage;
