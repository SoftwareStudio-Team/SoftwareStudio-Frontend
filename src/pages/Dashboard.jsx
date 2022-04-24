import React, { useState, useEffect } from 'react';
import AccountsApi from '../api/accounts';
import { useUser } from '../state/user/hook';
import { PageLayout } from '../components';
const Dashboard = () => {
  const [users, setUsers] = useState();
  const { user } = useUser();
  const getUsers = async () => {
    const { data } = await AccountsApi.getAll();
    setUsers(data);
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
          <div>{users.length}</div>
        )}
      </div>
    </PageLayout>
  );
};

export default Dashboard;
