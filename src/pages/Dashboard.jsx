import React, { useState, useEffect } from 'react';
import AccountsApi from '../api/accounts';
import { PageLayout } from '../components';

import { MdDeleteOutline } from 'react-icons/md';

import { HiBan } from 'react-icons/hi';

const Dashboard = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const { data } = await AccountsApi.getAll();
    setUsers(data);
  };

  const Deleteuser = async (id) => {
    try {
      await AccountsApi.delete({ id });
      window.location.reload();
    } catch (err) {}
  };

  const banUser = async (id, isBanned) => {
    if (isBanned) {
      try {
        await AccountsApi.unban({ id });
        window.location.reload();
      } catch (err) {}
    } else {
      try {
        await AccountsApi.ban({ id });
        window.location.reload();
      } catch (err) {}
    }
  };

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    <PageLayout>
      <div>
        {users === undefined ? (
          <div>loading...</div>
        ) : (
          <div className="w-3/5 mx-auto space-y-4 pb-10">
            <p className="font-bold text-2xl text-slate-500">User accounts</p>
            <hr className="w-full mt-5" />
            {users.map((user) => {
              return (
                <div className={user.isBanned && 'opacity-50'}>
                  <div className="flex flex-col w-full h-full rounded border max-w-full p-3 space-y-2">
                    <div className="flex flex-row justify-between">
                      <div>
                        <p className="text-xl font-bold text-gray-600">
                          {user.username}
                        </p>
                        <p className="text-xs -mt-1 text-gray-600">Username</p>
                      </div>
                      <div className="items-end ">
                        <button
                          className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                          onClick={() => {
                            banUser(user.id, user.isBanned);
                          }}
                        >
                          <HiBan />
                        </button>
                        <button
                          className="text-xl text-slate-500 hover:text-red-600 ease-in-out duration-300"
                          onClick={() => {
                            Deleteuser(user.id);
                          }}
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-semibold">
                          <p className="font-bold text-xl text-gray-600">
                            {user.firstName} {user.lastName}
                          </p>
                          <p className="text-xs -mt-1 text-gray-600">Name</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Dashboard;
