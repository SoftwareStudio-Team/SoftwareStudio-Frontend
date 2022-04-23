import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useBlogState } from "../../state/BlogState/hook";
import { useParams } from "react-router-dom";
import axios from "axios";
import rehypeRaw from "rehype-raw";
const Blog = () => {
  const [blog, setBlog] = useState({
    blog: [],
  });
  const { title, content } = useBlogState();
  const id = useParams().id;

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    const resp = await axios.get("https://161.246.6.18:8880/api/Contents/" + id);
    setBlog({ ...blog, blog: resp.data });
    console.log(resp.data)
    };
  

  return (
    <div className="w-full p-2 overflow-x-auto break-all rounded-lg bg-slate-100 markdown">
      <div className="flex flex-col gap-1 px-3 py-1">
        {blog.blog.title || blog.blog.contentMarkdown ? (
          <div>
            <div className="text-3xl">{blog.blog.title}</div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {blog.blog.contentMarkdown}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-slate-400 font-bold">Nothing to preview</div>
        )}
      </div>
    </div>
  );
};

export default Blog;
