import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { PageLayout, BlogCard } from '../components';

import ContentsApi from '../api/contents';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <div className="flex flex-col items-center gap-7 h-full w-full mt-5">
        {loading ? (
          <p>loading...</p>
        ) : (
          blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })
        )}
      </div>
    </PageLayout>
  );
};
export default Home;
