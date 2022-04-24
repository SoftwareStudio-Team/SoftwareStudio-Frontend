import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { PageLayout, BlogCard } from '../components';

import ContentsApi from '../api/contents';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

import { useUser } from '../state/user/hook';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await ContentsApi.getAll();
        setBlogs(data);
      } catch (err) {
        toast.error(err.response.data.messsage);
      }
      setLoading(false);
    };
    getBlogs();
  }, []);

  return (
    <PageLayout>
      <div className="h-full w-3/5 mt-5 mx-auto">
        <div className="flex flex-col items-center pb-10 space-y-4">
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-row items-center justify-between w-full">
              <p className="font-bold text-2xl text-slate-500">Active Blog</p>
              {user.role == 'admin' && (
                <Link
                  className="flex flex-row items-center gap-1 bg-amber-400 hover:bg-amber-500 text-white font-bold px-3 rounded-md w-22 h-8 ease-in-out duration-300"
                  to="/createBlog"
                >
                  <MdOutlineAddCircleOutline />
                  Post
                </Link>
              )}
            </div>
            <hr className="w-full mt-5" />
          </div>
          {loading ? (
            <p>loading...</p>
          ) : (
            blogs.map((blog) => {
              return <BlogCard key={blog.id} blog={blog} />;
            })
          )}
        </div>
      </div>
    </PageLayout>
  );
};
export default Home;
