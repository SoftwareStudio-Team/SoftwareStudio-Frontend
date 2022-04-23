import React from 'react';

import { useUser } from '../state/user/hook';

import { PageLayout } from '../components';

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <PageLayout>
      <div className="flex flex-col w-full h-full">
        <div>{user.id}</div>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.username}</div>
        <div>{user.birthDate}</div>
        <div>{user.role}</div>
      </div>
    </PageLayout>
  );
};
export default ProfilePage;
