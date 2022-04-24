import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import ContentsApi from '../api/contents';

import { PageLayout, BlogPreview } from '../components';

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [contentMarkdown, setContentMarkdown] = useState('');

  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    //TODO : may apply with redux like LoginPage
    try {
      await ContentsApi.create({
        title,
        contentMarkdown,
      });
      navigate('/');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col mx-auto w-3/5 h-full space-y-4 pb-6">
        <button
          className={
            !showPreview
              ? 'bg-white text-amber-600 border-amber-400 border-4 hover:border-amber-500 font-bold text-sm rounded-full w-24 h-9 ease-in-out duration-300'
              : 'bg-amber-400 hover:bg-amber-500 text-white font-bold text-sm rounded-full w-24 h-9 ease-in-out duration-300'
          }
          onClick={togglePreview}
        >
          Preview
        </button>
        <hr />
        <div className="h-full w-full">
          {!showPreview ? (
            <div className="flex flex-col space-y-3 h-full">
              <div className="flex flex-col">
                <p className="font-bold text-stone-500">Title</p>
                <input
                  className="rounded-md appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="username"
                  type="text"
                  placeholder="Enter your title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col h-full">
                <p className="font-bold text-stone-500">Content</p>
                <textarea
                  className="h-full p-2 border rounded-md outline-none resize-none form-textarea"
                  placeholder="Enter your markdown content"
                  value={contentMarkdown}
                  onChange={(e) => {
                    setContentMarkdown(e.target.value);
                  }}
                />
              </div>
              <button
                className={
                  'flex flex-row items-center justify-center mx-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md w-full md:w-32 h-12 ease-in-out duration-300'
                }
                onClick={handleCreateBlog}
              >
                Publish
              </button>
            </div>
          ) : (
            <BlogPreview title={title} contentMarkdown={contentMarkdown} />
          )}
        </div>
      </div>
    </PageLayout>
  );
};
export default CreateBlogPage;
