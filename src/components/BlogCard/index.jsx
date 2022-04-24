import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { MdOutlineFavorite, MdTextsms } from 'react-icons/md';

const BlogCard = ({ blog }) => {
  return (
    <Link
      className="flex flex-col w-full max-h-96 rounded-md px-10 py-6 bg-white border markdown"
      to={`/blog/${blog.id}`}
    >
      <div className="flex flex-row items-start justify-between space-x-2">
        <p className="text-2xl text-gray-700 font-bold hover:text-gray-600">
          {blog.title}
        </p>
        <p className="font-light text-gray-600 min-w-max pt-2">
          {blog.createDate.substring(0, 10)}
        </p>
      </div>
      <div className="overflow-y-hidden">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {blog.contentMarkdown}
        </ReactMarkdown>
      </div>
      <div className="flex space-x-2 items-center mt-4 ">
        <div className="flex items-center text-red-600 font-bold">
          <MdOutlineFavorite />
          <p>{blog.likes.length}</p>

        </div>
        <div className="flex items-center space-x-0.5 text-slate-600 font-bold">
          <MdTextsms />
          <p>{blog.comments.length}</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;
