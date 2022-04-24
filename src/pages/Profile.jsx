import React from 'react';
import AccountsApi from '../api/accounts';
import { useUser } from '../state/user/hook';
import { useState } from 'react';
import { PageLayout } from '../components';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const {
    user,
    reducers: { update, logout },
  } = useUser();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [birthDate, setBirthDate] = useState(user.birthDate.split('T')[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    update({ firstName, lastName, birthDate });
  };
  const Deleteuser = async () => {
    try {
      await AccountsApi.delete({ id: user.id });
      logout();
      navigate('/login');
    } catch (err) {}
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center w-full h-full mt-5">
        <div className="w-96 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform">
          <img
            className="relative object-cover w-[550px] h-[250px] rounded-xl"
            src="https://i.imgur.com/Zi6v09P.png"
          />

          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between ">
              <div className="">
                <p className="font-light">Username</p>
                <p className="font-medium">{user.username}</p>
                <p className="font-light">Name</p>
                <p className=" flex flex-row space-x-2 font-medium ">
                  <div>{user.firstName}</div>
                  <div>{user.lastName}</div>
                </p>
              </div>
              <img
                className="w-14 h-14"
                src="https://files.gathersheet.com/images/sticker/festival/loy-kratong-festival-2017/%E0%B8%A7%E0%B8%B1%E0%B8%94.png"
              />
            </div>
            <div className="mt-10 pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light text-xs">Birth date</p>
                  <p className="font-medium tracking-wider text-sm">
                    {user.birthDate.substring(0, 10)}
                  </p>
                </div>
                <div className="">
                  <p class="font-light text-xs">role</p>
                  <p className="font-medium text-sm">{user.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/5 mt-16">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="border py-2 px-3 rounded-md outline-none text-grey-800"
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
                className="border py-2 px-3 rounded-md outline-none text-grey-800"
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
                className="border py-2 px-3 rounded-md outline-none text-grey-800"
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
              className="flex justify-center items-center mx-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 rounded-md w-24 h-9 ease-in-out duration-300 mt-5"
            >
              Save
            </button>
          </form>
          <div className="flex flex-row justify-between items-center w-full h-16 rounded-md border-red-500 border-2 px-4 my-10">
            <div className="flex flex-col">
              <p className="font-bold ">Delete this account</p>
              <p className="text-sm">
                Once you delete account, there is no going back. Please be
                certain.
              </p>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded-md w-44 h-9 ease-in-out duration-300"
              onClick={Deleteuser}
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default ProfilePage;
