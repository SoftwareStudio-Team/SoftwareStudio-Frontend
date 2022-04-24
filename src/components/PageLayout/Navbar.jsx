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
    <div className="fixed top-0 z-10 flex flex-row justify-between items-center w-full h-20 px-10 bg-gray-400">
      <Link to="/"><div>Software Studio</div></Link>
      <div className="flex flex-row space-x-2">
        {user.role == 'admin' && (
          <Link
            className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400"
            to="/createBlog"
          >
            CreateBlog
          </Link>
        )}
        <Link
          className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400"
          to="/"
        >
          Feed
        </Link>
        <Link
          className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400"
          to="/profile"
        >
          Profile
        </Link>
        <button
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
