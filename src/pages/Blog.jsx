import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { toast } from 'react-toastify';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import {
  PageLayout,
  FeedbackCard,
  CommentCard,
  CreateCommentCard,
} from '../components';

import { useUser } from '../state/user/hook';
import ContentsApi from '../api/contents';

const BlogPage = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const { user } = useUser();

  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      await ContentsApi.delete({ id });
      navigate(`/`);
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

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
                {user.role === 'admin' && (
                  <div className="flex flex-row justify-between items-center w-full h-16 rounded-md border-red-500 border-2 px-4 my-10">
                    <div className="flex flex-col">
                      <p className="font-bold ">Delete this blog</p>
                      <p className="text-sm">
                        Once you delete account, there is no going back. Please
                        be certain.
                      </p>
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded-md w-32 h-9 ease-in-out duration-300"
                      onClick={handleDelete}
                    >
                      Delete blog
                    </button>
                  </div>
                )}
                <div className="flex flex-row justify-between items-center">
                  <CreateCommentCard
                    className="flex-4"
                    idpost={id}
                  ></CreateCommentCard>
                </div>
                <div className="w-full h-full ">
                  {blog.comments.map((data) => {
                    return <CommentCard comment={data} key={data.id} />;
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
