import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const BlogPreview = ({ title, contentMarkdown }) => {
  return (
    <div className="p-2 overflow-x-auto break-all rounded-lg bg-slate-100 markdown">
      <div className="flex flex-col gap-1 px-3 py-1">
        {title || contentMarkdown ? (
          <div>
            <div className="text-3xl">{title}</div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {contentMarkdown.toString()}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-slate-400 font-bold">Nothing to preview</div>
        )}
      </div>
    </div>
  );
};

export default BlogPreview;
