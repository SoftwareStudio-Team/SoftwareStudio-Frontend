import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { PageLayout, FeedbackCard } from '../components';

import ContentsApi from '../api/contents';
import CommentCard from '../comment/CommentCard';
import Postcom from '../comment/Postcom';

const BlogPage = () => {
  const id = useParams().id;

  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlog = async () => {
      try {
        setLoading(true);
        const { data } = await ContentsApi.getById({ id });
        setBlog(data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
      setLoading(false);
    };

    getBlog();
  }, []);

  return (
    <PageLayout>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="w-3/5 mx-auto p-2 break-all rounded-lg markdown">
          <div className="flex flex-col gap-1 px-3 py-1">
            {blog && (
              <div className="space-y-5 mb-10">
                <div className="space-y-5 bg-slate-100 px-10 py-5 rounded-md">
                  <div className="font-bold text-3xl">{blog.title}</div>
                  <hr className="border border-slate-300" />
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {blog.contentMarkdown}
                  </ReactMarkdown>
                  <FeedbackCard likes={blog.likes} blogid={blog.id} />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <Postcom className="flex-4" idpost={id}></Postcom>
                </div>
                <div className="w-full h-full ">
                  {blog.comments.map((data, index) => {
                    return (
                      <CommentCard comment={data} index={index} key={data.id} />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default BlogPage;
