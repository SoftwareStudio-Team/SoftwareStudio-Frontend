import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link
      className="flex flex-col w-4/5 border-2 rounded-md h-[100px] my-4"
      to={`/blog/${blog.id}`}
    >
      <div className="text-xl pt-2 pl-4">{blog.title}</div>
      <div className="flex items-end h-full pb-2 pl-4 justify-between">
        <div className="">{blog.createDate.substring(0, 10)}</div>
        <div className="flex justify-self-end gap-x-4">
          <div>Likes</div>
          <div className="pr-4">Comments</div>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;
