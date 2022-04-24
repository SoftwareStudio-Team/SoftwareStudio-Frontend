import React from 'react';
import AccountsApi from '../api/accounts';
import { useUser } from '../state/user/hook';
import { useState } from 'react';
import { PageLayout } from '../components';

const ProfilePage = () => {
  const {
    user,
    reducers: { update },
  } = useUser();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [birthDate, setBirthDate] = useState(user.birthDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    update({ firstName, lastName, birthDate });
  };

  return (
    <PageLayout>
      <div className="flex flex-col w-full h-full">
        <div>{user.id}</div>
        <div>{user.username}</div>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.role}</div>

        <form onSubmit={handleSubmit}>
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
            className="block bg-teal-400 hover:bg-teal-600 text-white  text-lg mx-auto p-4 rounded"
            type="submit"
          >
            Change Data
          </button>
        </form>
      </div>
    </PageLayout>
  );
};
export default ProfilePage;
