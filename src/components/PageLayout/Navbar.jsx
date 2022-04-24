import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        <p className="font-bold text-slate-500">Software Studio</p>
      </Link>
      <div className="flex flex-row space-x-2">
        {user.role == 'admin' && (
          <Link
            className="px-4 py-2 rounded-lg bg-invisible hover:bg-white ease-in-out duration-300"
            to="/createBlog"
          >
            <p className="font-bold text-slate-400">CreateBlog</p>
          </Link>
        )}
        <Link
          className="px-4 py-2 rounded-lg bg-invisible hover:bg-white ease-in-out duration-300"
          to="/profile"
        >
          <p className="font-bold text-slate-400">Profile</p>
        </Link>
        <button
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 ease-in-out duration-300"
          onClick={handleLogout}
        >
          <p className="font-bold text-white">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
