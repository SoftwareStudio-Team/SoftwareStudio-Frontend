import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { PageLayout } from '../components';

import ContentApi from '../api/content';
import { toast } from 'react-toastify';

const CreateBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    //TODO : may apply with redux like LoginPage
    try {
      await ContentApi.create({
        title,
        contentMarkdown: content,
        createDate: new Date().now,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <PageLayout>
      <div className="flex">
        <div className="flex-1 bg-teal-400 px-4">
          <div className="text-center">Write Your Blog Here!</div>
          <div className="flex flex-col">
            <form onSubmit={handleCreateBlog}>
              <div className="flex py-3">
                <div className="float-left w-1/5">
                  <label>Title</label>
                </div>
                <div className="float-left w-4/5">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full border-2 rounded-md h-[40px]"
                    placeholder="Your Topic.."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex py-3">
                <div className="float-left w-1/5">
                  <label>Content</label>
                </div>
                <div className="float-left w-4/5 ">
                  <textarea
                    id="content"
                    name="content"
                    className="w-full border-2 resize-none rounded-md h-[725px] "
                    placeholder="Write something.."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </div>
              <div className="py-3 float-right">
                <button
                  type="submit"
                  className="border-2 rounded-md bg-white px-4"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-center">This is Preview</div>
          <div className="">
            <ReactMarkdown
              children={content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default CreateBlogPage;
