import React, { useState, useCallback } from "react";

import Editor from "./Editor";
import Preview from "./Preview";

const BlogEditor = () => {
  const [preview, setPreview] = useState(false);

  const togglePreview = useCallback(() => {
    setPreview(!preview);
  }, [preview]);

  return (
    <div className="grid grid-cols-7 md:grid-cols-5 h-full">
      <div className="flex flex-col gap-3 col-start-2 md:col-start-2 col-span-5 md:col-span-3 h-full">
        <button
          className={
            !preview
              ? "bg-white text-amber-600 border-amber-400 border-4 hover:border-amber-500 font-bold text-sm rounded-full w-24 h-9 ease-in-out duration-300"
              : "bg-amber-400 hover:bg-amber-500 text-white font-bold text-sm rounded-full w-24 h-9 ease-in-out duration-300"
          }
          onClick={togglePreview}
        >
          Preview
        </button>
        <hr />
        <div className="h-full">{!preview ? <Editor /> : <Preview />}</div>
      </div>
    </div>
  );
};

export default BlogEditor;
