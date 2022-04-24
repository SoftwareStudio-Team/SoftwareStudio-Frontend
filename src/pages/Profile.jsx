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
        <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                
                <img class="relative object-cover w-[550px] h-[250px] rounded-xl" src="https://i.imgur.com/Zi6v09P.png"/>
                
                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between " >
                        <div class="">
                            <p class="font-light">
                                Username
                            </p>
                            <p class="font-medium tracking-widest">
                              {user.username}
                            </p>
                            <p class="font-light">
                                firstname lastname
                            </p>
                            <p class=" flex flex-row space-x-2 font-medium tracking-widest">
                            <div>{user.firstName}</div><div>{user.lastName}</div>
                            </p>
                        </div>
                        <img class="w-14 h-14" src="https://files.gathersheet.com/images/sticker/festival/loy-kratong-festival-2017/%E0%B8%A7%E0%B8%B1%E0%B8%94.png"/>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            Card Number
                        </p>
                        <p class="font-medium tracking-more-wider">
                         {user.id}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    birthday
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                  {user.birthDate.substring(0, 10)}
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    role
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                  {user.role}
                                </p>
                            </div>
    
                           
                        </div>
                    </div>
    
                </div>
            </div>
        
        
        <form  >
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
