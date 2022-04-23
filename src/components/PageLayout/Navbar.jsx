import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../../state/user/hook';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return (
    <div className="flex flex-row justify-between items-center w-full h-full px-10 bg-gray-400">
      <div>Software Studio</div>
      {user.role == 'admin' && (
        <Link
          className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400"
          to="/createBlog"
        >
          CreateBlog
        </Link>
      )}
      <button
        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
