import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link
      class="flex flex-col w-full rounded-md w-3/5 px-10 py-6 bg-white rounded-lg border-2 shadow-md"
      to={`/blog/${blog.id}`}
    >
      <div class="flex justify-between items-center">
        <span class="font-light text-gray-600">
          {blog.createDate.substring(0, 10)}
        </span>
      </div>
      <div class="mt-2">
        <a class="text-2xl text-gray-700 font-bold hover:text-gray-600">
          {blog.title}
        </a>
      </div>
      <div class="flex justify-between items-center mt-4">
        <a class="text-blue-600 hover:underline">
          <button className="text-white px-4 w-auto h-10 bg-red-600 rounded-full ">
            {blog.likes.length}
            <svg
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              className="w-6 h-6 inline-block mr-1"
            >
              <path
                fill="#FFFFFF"
                d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
                                    c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"
              />
            </svg>
          </button>
        </a>
        <div>
          <a class="flex items-center">
            <h1 class="text-gray-700 font-bold">Admin</h1>
          </a>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;
