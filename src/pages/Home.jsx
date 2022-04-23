import React, { useEffect, useState } from 'react';

import { PageLayout, BlogCard } from '../components';

import ContentsApi from '../api/contents';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await ContentsApi.getAll();
        setBlogs(data);
      } catch (err) {
        toast.error(err.response.data.messsage);
      }
    };
    getBlogs();
  }, []);

  return (
    <PageLayout>
      <div className="grid grid-cols-2 justify-items-center">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} />;
        })}
      </div>
    </PageLayout>
  );
};
export default Home;
