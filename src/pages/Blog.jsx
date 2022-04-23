import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { PageLayout } from '../components';

import ContentsApi from '../api/contents';

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
      <div className="w-full h-full p-2 overflow-x-auto break-all rounded-lg bg-slate-100 markdown">
        <div className="flex flex-col gap-1 px-3 py-1">
          {loading ? (
            <p>loading...</p>
          ) : (
            <>
              {blog ? (
                <>
                  <div className="text-3xl">{blog.title}</div>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {blog.contentMarkdown}
                  </ReactMarkdown>
                </>
              ) : (
                <div className="text-slate-400 font-bold">
                  Nothing to preview
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
