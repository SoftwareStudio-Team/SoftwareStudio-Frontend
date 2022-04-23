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
        createDate: new Date().now,
      });
      navigate('/');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <PageLayout>
      <div className="w-full h-full">
        <div className="grid grid-cols-7 md:grid-cols-5 h-96">
          <div className="flex flex-col gap-3 col-start-2 md:col-start-2 col-span-5 md:col-span-3 h-full">
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
            <div className="h-full">
              {!showPreview ? (
                <div className="flex flex-col gap-5 h-full">
                  <div className="flex flex-col gap-2">
                    <p className="text-stone-500">Title</p>
                    <input
                      className="shadow rounded-md appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter your title."
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 h-1/2">
                    <p className="text-stone-500">Content</p>
                    <textarea
                      className="h-full p-2 border-2 shadow rounded-md outline-none resize-none form-textarea"
                      placeholder="Enter your content."
                      value={contentMarkdown}
                      onChange={(e) => {
                        setContentMarkdown(e.target.value);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <BlogPreview title={title} contentMarkdown={contentMarkdown} />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <button
            className={
              'bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full md:w-32 h-12 ease-in-out duration-300'
            }
            onClick={handleCreateBlog}
          >
            Create
          </button>
        </div>
      </div>
    </PageLayout>
  );
};
export default CreateBlogPage;
