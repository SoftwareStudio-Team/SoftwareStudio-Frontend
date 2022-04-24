import React, { useState, useEffect } from 'react';
import AccountsApi from '../api/accounts';
import { PageLayout } from '../components';
const Dashboard = () => {
  const [users, setUsers] = useState();
  const cssClass =
    'text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none';

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
      if (isBanned){
        try {
            await AccountsApi.unban({ id });
            window.location.reload();
          } catch (err) {}
      }else{
        try {
            await AccountsApi.ban({ id });
            window.location.reload();
          } catch (err) {}
      }
   
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <PageLayout>
      <div>
        {users === undefined ? (
          <div>loading...</div>
        ) : (
          <div>
            {users.map((user) => {
              return (
                <div>
                  <div className="flex flex-col w-full h-full bg-white max-w-full rounded-2xl px-10 py-8 mt-5 shadow-lg hover:shadow-2xl transition duration-500">
                    <div className="flex flex-row justify-between">
                      <p className="mt-4 text-md text-gray-600">
                        {user.username}
                      </p>
                      {/* Delete Btn */}

                      <div className="items-end">
                        <button className={cssClass} onClick={() => {
                            Deleteuser(user.id)
                        }}>
                          delete
                        </button>
                        <button className={cssClass} onClick={() => {
                            banUser(user.id, user.isBanned)
                        }}>
                          {user.isBanned ? `Unban` : `ban`}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mt-4 flex items-center space-x-4 py-6">
                        <div className="text-sm font-semibold">
                          {user.firstName} {user.lastName}
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
