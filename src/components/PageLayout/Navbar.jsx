import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MdLogout } from 'react-icons/md';
import { useUser } from '../../state/user/hook';

const Navbar = () => {
  const navigate = useNavigate();
  const {
    user,
    reducers: { logout },
  } = useUser();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);
  return (
    <div className="fixed top-0 z-10 flex flex-row justify-between items-center w-full h-20 px-10 bg-slate-100">
      <Link to="/">
        <p className="text-lg font-bold text-slate-400 hover:text-teal-500 ease-in-out duration-300">
          Thum-Ma
        </p>
      </Link>
      <div className="flex flex-row space-x-2">
        <Link className="px-4 py-2 rounded-lg bg-invisible" to="/profile">
          <p className="font-bold text-slate-400 hover:text-teal-500 ease-in-out duration-300">
            {user.firstName}
          </p>
        </Link>
        <button
          className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 ease-in-out duration-300"
          onClick={handleLogout}
        >
          <p className="flex items-center gap-1 font-bold text-white">
            Logout
            <MdLogout />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
